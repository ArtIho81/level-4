import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people.entity';
import { People_Images } from '../images/images.entity';
import { ImagesModule } from '../images/images.module';
import { ImagesService } from 'src/images/images.service';

@Module({
  imports: [TypeOrmModule.forFeature([People, People_Images])],
  controllers: [PeopleController],
  providers: [PeopleService, ImagesService],
  exports:[TypeOrmModule]
})
export class PeopleModule {}
