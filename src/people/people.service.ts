import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { UpdatePeopleDTO } from './dto/update-people.dto';
import { People } from './people.entity';
import { People_Images } from '../images/images.entity';
import { ImagesService } from '../images/images.service';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
    @InjectRepository(People_Images)
    private readonly imagesRepository: Repository<People_Images>,
    private readonly imagesService: ImagesService,
    ) {}

    private peoplePerPage = 10;
    private isFileDeleted = async (path: string) => await this.imagesService.deleteFile(path);

  private createArrayForProp(array: People_Images[], prop: string): string[] {
    return [...array].map((el) => el[prop]);
  }

  async getAllPeople(page: number) {
    return await this.peopleRepository
      .createQueryBuilder('people')
      .leftJoinAndSelect('people.images', 'images')
      .orderBy('people.id', 'DESC')
      .skip(this.peoplePerPage * page)
      .take(this.peoplePerPage)
      .getMany();
    //return people.map(el => ({...el, images : this.createArrayForProp(el.images, 'path')}))
  }

  async getById(id: number) {
    return await this.peopleRepository
      .createQueryBuilder('people')
      .leftJoinAndSelect('people.images', 'images')
      .where('people.id = :id', { id })
      .getOne();
    //const images =  this.createArrayForProp(people.images, 'path')
    //return {...people, images}
  }

  async createPeople(dto: CreatePeopleDTO) {
    await this.peopleRepository.save(dto);
  }

  async deletePeopleById(id: number) {
    const people = await this.getById(id);
    const images = people.images;
    await Promise.all(
      images.map(async (img) => {
        if (!(await this.isFileDeleted(img.path))) {
          throw new InternalServerErrorException();
        }
        await this.imagesRepository.remove(img);
      }),
    );
    await this.peopleRepository.remove(people);
  }

  async updatePeopleById(id: number, dto: UpdatePeopleDTO) {
    await this.peopleRepository.update(id, dto);
  }
  
  async addImage(id: number, file: Express.Multer.File) {
    const image = new People_Images();
    image.path = await this.imagesService.saveFile(file);
    if (!image.path) {
      throw new InternalServerErrorException();
    }
    const people = await this.getById(id);
    await this.imagesRepository.save(image);
    people.images.push(image);
    await this.peopleRepository.save(people);
  }

  async deleteImage(id: number) {
    const image = await this.imagesRepository.findOneBy({ id });
    if (!(await this.isFileDeleted(image.path))) {
      throw new InternalServerErrorException();
    }
    await this.imagesRepository.delete(id);
  }
}
