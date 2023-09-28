import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';
import { ApiTags } from '@nestjs/swagger';
import { ParamIdPipe } from '@src/people/pipes/param-id.pipe';
import { CreateSpaceshipsDTO } from './dto/create-spaceships.dto';
import { UpdateSpaceshipsDTO } from './dto/update-spaceships.dto';
import { TransformInterceptor } from '@src/utils/interceptors/transform.interceptor';

@ApiTags("Spaceships")
@Controller('spaceships')
@UseInterceptors(TransformInterceptor)
export class SpaceshipsController {
    constructor(private readonly spaceshipsService: SpaceshipsService){}
    
    @Get()
      getAllSpaceships() {
        return this.spaceshipsService.getAllSpaceships();
      }

      @Get(':id')
      getSpaceshipById(@Param('id', ParamIdPipe) id: number) {
        return this.spaceshipsService.getSpaceshipById(id);
      }
      
      @Post()
      addSpaceship(@Body() dto: CreateSpaceshipsDTO) {
        return this.spaceshipsService.addSpaceship(dto);
      }

      @Put()
      updateSpaceship(@Param('id', ParamIdPipe) id: number, @Body() dto: UpdateSpaceshipsDTO) {
        return this.spaceshipsService.updateSpaceship(id, dto)
      }

      @Delete()
      deleteSpaceship(@Param('id', ParamIdPipe) id: number) {
        return this.spaceshipsService.deleteSpaceship(id)
      }
}
