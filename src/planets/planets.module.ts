import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { Planets } from './planets.entity';
import { UtilsService } from '@src/utils/utils.service';

@Module({
    imports: [TypeOrmModule.forFeature([Planets])],
    controllers: [PlanetsController],
    providers: [PlanetsService, UtilsService],
    exports: [TypeOrmModule],
})
export class PlanetsModule {}
