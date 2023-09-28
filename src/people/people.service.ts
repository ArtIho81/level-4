import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { UpdatePeopleDTO } from './dto/update-people.dto';
import { People } from './people.entity';
import { ImagesService } from '../images/images.service';
import { dataSource } from '@src/db/data-source';
import { UtilsService } from '@src/utils/utils.service';
import { PeopleResponse } from '@src/utils/types';

@Injectable()
export class PeopleService {
  constructor(
    private readonly imagesService: ImagesService,
    private readonly utilsService: UtilsService,
  ) {}

  private peoplePerPage = 10;

  async getAllPeople(page: number): Promise<PeopleResponse[]> {
    const people = await dataSource.getRepository(People).find({
      order: { id: 'DESC' },
      skip: this.peoplePerPage * page,
      take: this.peoplePerPage,
    });
    if (!people) {
      throw new NotFoundException();
    }
    return await Promise.all(
      people.map(
        async (person) =>
          await this.utilsService.makeRelatedEntityResponse(person),
      ),
    );
  }

  async getById(id: number): Promise<PeopleResponse> {
    const person = await dataSource.getRepository(People).findOneBy({ id });
    if (!person) {
      throw new NotFoundException();
    }
    return await this.utilsService.makeRelatedEntityResponse(person);
  }

  async createPeople(dto: CreatePeopleDTO) {
    let people = new People();
    people = await this.utilsService.createEntityInstance(people, dto)
    return await dataSource.manager.save(people) 
  }

  async deletePeopleById(id: number) {
    let people = await dataSource.getRepository(People).findOneBy({ id });
    if(!people) {
      throw new NotFoundException()
    }
    const images = await people.images;
    await Promise.all(images.map(this.imagesService.removeImage));
    people = await this.utilsService.clearProps(people);
    await dataSource.manager.save(people);
    return await dataSource.manager.remove(people);
  }

  async updatePeopleById(id: number, dto: UpdatePeopleDTO) {
    let people = await dataSource.getRepository(People).findOneBy({ id });
    if(!people) {
      throw new NotFoundException()
    }
    people = await this.utilsService.createEntityInstance(people, dto)
    return await dataSource.manager.save(people)
  }

  async addImageForPerson(id: number, image: Express.Multer.File) {
    return await this.imagesService.addImageForEntity(id, image, People);
  }
}
