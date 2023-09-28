import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spaceships } from './spaceships.entity';
import { SpaceshipsController } from './spaceships.controller';
import { SpaceshipsService } from './spaceships.service';
import { UtilsService } from '@src/utils/utils.service';

@Module({
    imports:[TypeOrmModule.forFeature([Spaceships])],
    controllers: [SpaceshipsController],
    providers:[SpaceshipsService, UtilsService],
    exports: [TypeOrmModule]
})
export class SpaceshipsModule {}

