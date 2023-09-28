import { Injectable, NotFoundException } from '@nestjs/common';
import { UtilsService } from '@src/utils/utils.service';
import { CreateVehiclesDTO } from './dto/create-vehicles.dto';
import { Vehicles } from './vehicles.entity';
import { dataSource } from '@src/db/data-source';
import { UpdateVehiclesDTO } from './dto/update-vehicles.dto';
import { VehiclesResponse } from '@src/utils/types';

@Injectable()
export class VehiclesService {
  constructor(private readonly utilsService: UtilsService) {}

  async getAllVehicles(): Promise<VehiclesResponse[]> {
    const vehicles = await dataSource.manager.getRepository(Vehicles).find();
    return await Promise.all(
      vehicles.map(
        async (vehicle) =>
          await this.utilsService.makeRelatedEntityResponse(vehicle),
      ),
    );
  }

  async getVehicleById(id: number): Promise<VehiclesResponse> {
    const vehicle = await dataSource.getRepository(Vehicles).findOneBy({ id });
    return await this.utilsService.makeRelatedEntityResponse(vehicle);
  }

  async addVehicle(dto: CreateVehiclesDTO) {
    let vehicle = new Vehicles();
    vehicle = await this.utilsService.createEntityInstance(vehicle, dto);
    return await dataSource.manager.save(vehicle);
  }

  async updateVehicle(id: number, dto: UpdateVehiclesDTO) {
    let vehicle = await dataSource.getRepository(Vehicles).findOneBy({ id });
    if (!vehicle) throw new NotFoundException();
    vehicle = await this.utilsService.createEntityInstance(vehicle, dto);
    return await dataSource.manager.save(vehicle);
  }

  async deleteVehicle(id: number) {
    let vehicle = await dataSource.getRepository(Vehicles).findOneBy({ id });
    if (!vehicle) throw new NotFoundException();
    vehicle = await this.utilsService.clearProps(vehicle);
    await dataSource.manager.save(vehicle);
    return dataSource.manager.remove(vehicle);
  }
}
