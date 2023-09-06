import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleModule } from './people/people.module';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from './data-source';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PeopleModule, ImagesModule],
})
export class AppModule {
}
