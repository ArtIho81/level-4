import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,} from 'typeorm';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { UpdatePeopleDTO } from './dto/update-people.dto';
import { People } from './people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
  ) {}
  private peoplePerPage = 10;

  async getAllPeople(page: number) {
    return await this.peopleRepository.find({
      order: { id: 'DESC' },
      take: this.peoplePerPage,
      skip: this.peoplePerPage * page
    });
  }

  async getById(id: number) {
    return await this.peopleRepository.findOneBy({ id });
  }

  async createPeople(dto: CreatePeopleDTO) {
    await this.peopleRepository.save(dto);
  }

  async deletePeopleById(id: number) {
    await this.peopleRepository.delete(id);
  }

  async updatePeopleById(id: number, dto: UpdatePeopleDTO) {
    await this.peopleRepository.update(id, dto);
  }
}