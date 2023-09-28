import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleModule } from './people/people.module';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from './db/data-source';
import { ImagesModule } from './images/images.module';
import { PlanetsModule } from './planets/planets.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';
import { FilmsModule } from './films/films.module';
import { SpaceshipsModule } from './spaceships/spaceships.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({ isGlobal: true }),
    PeopleModule,
    ImagesModule,
    PlanetsModule,
    SpaceshipsModule,
    VehiclesModule,
    SpeciesModule,
    FilmsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSourse: DataSource) {}
}
