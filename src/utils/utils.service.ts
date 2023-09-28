import { Injectable, Type } from '@nestjs/common';
import { dataSource } from '@src/db/data-source';
import { Films } from '@src/films/films.entity';
import { People } from '@src/people/people.entity';
import { Planets } from '@src/planets/planets.entity';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Species } from '@src/species/species.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';
import { AllEntities, AllResponses } from './types';
import { Images } from '@src/images/images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UtilsService {
  constructor() {}
  
  private allRelations = [
    { name: 'people', type: People },
    { name: 'pilots', type: People },
    { name: 'characters', type: People },
    { name: 'residents', type: People },
    { name: 'films', type: Films },
    { name: 'starships', type: Spaceships },
    { name: 'vehicles', type: Vehicles },
    { name: 'homeworld', type: Planets },
    { name: 'planets', type: Planets },
    { name: 'species', type: Species },
    {name: 'images', type: Images}
  ];

  private async saveNewEntityInstance<AllEntities>(
    repository: Repository<AllEntities>,
    prop: string,
    field: string,
  ) {
    const entity = repository.create();
    entity[field] = prop;
    return await repository.save(entity);
  }

  async clearProps<AllEntities>(entity: AllEntities) {
    for (let prop of this.allRelations) {
      let relation = await entity[prop.name];
      if (Array.isArray(relation)) {
        relation = Promise.resolve([]);
      }
    }
    return entity;
  }

  private async fillProps<AllEntities>(
    repository: Repository<AllEntities>,
    props: string[],
  ) {
    if (!props) {
      return;
    }
    const field = repository.target === Films ? 'title' : 'name';
    const entityProp: AllEntities[] = [];
    for (const prop of props) {
      const whereConditions = {};
      whereConditions[field] = prop;
      const entity =
        (await repository.findOneBy(whereConditions)) ||
        (await this.saveNewEntityInstance(repository, prop, field));
      entityProp.push(entity);
    }
    return entityProp;
  }

  private async transformRelations(
    entity: AllEntities | AllEntities[],
  ): Promise<string | string[]> {
    const createLink = (instance) => instance.url + instance.id;
    return Array.isArray(entity) ? entity.map(createLink) : createLink(entity);
  }

  async makeRelatedEntityResponse(entity: AllEntities) {
    const responseEntity: any = Object.assign({}, entity);
    responseEntity.url += responseEntity.id;
    for (const relation of this.allRelations) {
      const prop = await entity[relation.name];
      if (prop) {
        responseEntity[relation.name] = await this.transformRelations(prop);
      }
    }
    return responseEntity;
  }

  async createEntityInstance<AllEntities>(entity: AllEntities, dto) {
    Object.assign(entity, dto);
    for (const relation of this.allRelations) {
      const repository = dataSource.manager.getRepository(relation.type);
      if (dto[relation.name] === undefined) continue;
      if (typeof dto[relation.name] === 'string') {
        dto[relation.name] = [dto[relation.name]];
      }
      entity[relation.name] = Promise.resolve(
        await this.fillProps(repository, dto[relation.name]),
      );
    }
    return entity;
  }
}
