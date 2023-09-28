import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlanetsService } from './planets.service';
import { ParamIdPipe } from '@src/people/pipes/param-id.pipe';
import { CreatePlanetsDTO } from './dto/create-planets.dto';
import { updatePlanetsDTO } from './dto/update-planets.dto';
import { TransformInterceptor } from '@src/utils/interceptors/transform.interceptor';

@ApiTags('Planets')
@Controller('planets')
@UseInterceptors(TransformInterceptor)
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  getAllPlanets() {
    return this.planetsService.getAllPlanets();
  }
  @Get(':id')
  getPlanetById(@Param('id', ParamIdPipe) id: number) {
    return this.planetsService.getPlanetById(id);
  }
  @Post()
  addPlanet(@Body() dto: CreatePlanetsDTO) {
    return this.planetsService.addPlanet(dto);
  }
  @Put()
  updateFilm(
    @Param('id', ParamIdPipe) id: number,
    @Body() dto: updatePlanetsDTO,
  ) {
    return this.planetsService.updatePlanet(id, dto);
  }
  @Delete()
  deletePlanet(@Param('id', ParamIdPipe) id: number) {
    return this.planetsService.deletePlanet(id);
  }
}
