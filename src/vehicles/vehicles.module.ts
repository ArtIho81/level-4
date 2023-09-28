import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicles } from './vehicles.entity';
import { UtilsService } from '@src/utils/utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicles])],
  providers: [VehiclesService, UtilsService],
  controllers: [VehiclesController],
  exports: [TypeOrmModule]
})
export class VehiclesModule {}
