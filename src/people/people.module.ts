import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people.entity';
import { Images } from '../images/images.entity';
import { ImagesService } from 'src/images/images.service';
import { Films } from '../films/films.entity';
import { UtilsService } from '@src/utils/utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([People, Images, Films])],
  controllers: [PeopleController],
  providers: [PeopleService, ImagesService, UtilsService],
  exports: [TypeOrmModule],
})
export class PeopleModule {}
