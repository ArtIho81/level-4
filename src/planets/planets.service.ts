import { Injectable, NotFoundException } from '@nestjs/common';
import { UtilsService } from '@src/utils/utils.service';
import { CreatePlanetsDTO } from './dto/create-planets.dto';
import { dataSource } from '@src/db/data-source';
import { Planets } from './planets.entity';
import { updatePlanetsDTO } from './dto/update-planets.dto';
import { Films } from '@src/films/films.entity';
import { People } from '@src/people/people.entity';
import { PlanetsResponse } from '@src/utils/types';

@Injectable()
export class PlanetsService {
  constructor(private readonly utilsService: UtilsService) {}

  async getAllPlanets(): Promise<PlanetsResponse[]> {
    const planets = await dataSource.manager.getRepository(Planets).find();
    return await Promise.all(
      planets.map(
        async (planet) =>
          await this.utilsService.makeRelatedEntityResponse(planet),
      ),
    );
  }

  async getPlanetById(id: number): Promise<PlanetsResponse> {
    const planet = await dataSource.manager
      .getRepository(Planets)
      .findOneBy({ id });
    return await this.utilsService.makeRelatedEntityResponse(planet);
  }

  async addPlanet(dto: CreatePlanetsDTO) {
    let planet = new Planets();
    planet = await this.utilsService.createEntityInstance(planet, dto)
    return await dataSource.manager.save(planet);
  }

  async updatePlanet(id: number, dto: updatePlanetsDTO) {
    let planet = await dataSource.manager.findOneBy(Planets, {id});
    if(!planet) {
      throw new NotFoundException()
    }
    planet = await this.utilsService.createEntityInstance(planet, dto)
    return await dataSource.manager.save(planet);
  }

  async deletePlanet(id: number) {
    let planet = await dataSource.manager.findOneBy(Planets, {id});
    if(!planet) {
      throw new NotFoundException()
    }
    planet = await this.utilsService.clearProps(planet);
    await dataSource.manager.save(planet);
    return await dataSource.manager.remove(planet);
  }
}