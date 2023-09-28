import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './species.entity';
import { UtilsService } from '@src/utils/utils.service';

@Module({
  imports:[TypeOrmModule.forFeature([Species])],
  controllers: [SpeciesController],
  providers: [SpeciesService, UtilsService],
  exports: [TypeOrmModule]
})
export class SpeciesModule {}
