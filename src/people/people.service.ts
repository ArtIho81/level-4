import { Injectable, BadRequestException } from '@nestjs/common';
import { people } from '../people';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { UpdatePeopleDTO } from './dto/update-people.dto';

@Injectable()
export class PeopleService {
  private allPeople = people;
  private peoplePerPage = 10;
  private validateArrayIndex = (index: number) => (index < 0 ? 0 : index);

  getAllPeople(page: number) {
    const startIndex = this.validateArrayIndex(
      this.allPeople.length - 1 - (page + 1) * this.peoplePerPage,
    );
    const endIndex = this.validateArrayIndex(
      this.allPeople.length - 1 - page * this.peoplePerPage,
    );
    return this.allPeople.slice(startIndex, endIndex);
  }

  getById(id: number) {
    return this.allPeople[id];
  }

  createPeople(dto: CreatePeopleDTO) {
    this.allPeople.push(dto);
    return this.allPeople.length - 1;
  }

  deletePeopleById(id: number) {
    const elementToDelete = this.allPeople[id];
    this.allPeople.splice(id, 1);
    return elementToDelete;
  }

  updatePeopleById(id: number, dto: UpdatePeopleDTO) {
    this.allPeople[id] = { ...this.allPeople[id], ...dto };
    return this.allPeople[id];
  }
}
