import { Injectable, NotFoundException } from '@nestjs/common';
import { UtilsService } from '@src/utils/utils.service';
import { CreateSpeciesDTO } from './dto/create-species.dto';
import { dataSource } from '@src/db/data-source';
import { Species } from './species.entity';
import { UpdateSpeciesDTO } from './dto/update-species.dto';
import { People } from '@src/people/people.entity';
import { Films } from '@src/films/films.entity';
import { spec } from 'node:test/reporters';
import { SpeciesResponse } from '@src/utils/types';

@Injectable()
export class SpeciesService {
  constructor(private readonly utilsService: UtilsService) {}

  async getAllSpecies(): Promise<SpeciesResponse[]> {
    const species =  await dataSource.manager
      .getRepository(Species)
      .find()
      return await Promise.all(species.map(async race => await this.utilsService.makeRelatedEntityResponse(race)))
  }

  async getSpeciesById(id: number): Promise<SpeciesResponse> {
    const race = await dataSource.manager
      .getRepository(Species)
      .findOneBy({id})
      return await this.utilsService.makeRelatedEntityResponse(race)
  }

  async addSpecies(dto: CreateSpeciesDTO) {
    let species = new Species
    species = await this.utilsService.createEntityInstance(species, dto)
    return await dataSource.manager.save(species)
  }

  async updateSpecies(id: number, dto: UpdateSpeciesDTO) {
    let species= await dataSource.getRepository(Species).findOneBy({id})
    if(!species) {
      throw new NotFoundException()
    }
    species = await this.utilsService.createEntityInstance(species, dto)
    return dataSource.manager.save(species)
  }

  async deleteSpecies(id: number) {
    let species = await dataSource.getRepository(Species).findOneBy({id})
    species= await this.utilsService.clearProps(species)
    await dataSource.manager.save(species)
    return dataSource.manager.remove(species)
  }
}
