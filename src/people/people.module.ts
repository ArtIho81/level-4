import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people.entity';
import { People_Images } from '../images/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([People, People_Images])],
  controllers: [PeopleController],
  providers: [PeopleService],
  exports:[TypeOrmModule]
})
export class PeopleModule {}
