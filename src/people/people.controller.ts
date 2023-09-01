import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Body,
  Post,
  Query,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { UpdatePeopleDTO } from './dto/update-people.dto';
import { QueryDTO } from './dto/query.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParamDTO } from './dto/param.dto';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @ApiOperation({ summary: 'Get people' })
  @ApiResponse({ status: 200, type: [CreatePeopleDTO] })
  @Get()
  getAllPeople(@Query() query: QueryDTO) {
    return this.peopleService.getAllPeople(query.page || 0);
  }

  @ApiOperation({ summary: 'Get person' })
  @ApiResponse({ status: 200, type: CreatePeopleDTO })
  @Get(':id')
  getById(@Param() param: ParamDTO) {
    return this.peopleService.getById(param.id);
  }

  @ApiOperation({ summary: 'Create new person' })
  @ApiResponse({ status: 200, type: CreatePeopleDTO })
  @Post()
  addPeople(@Body() dto: CreatePeopleDTO) {
    return this.peopleService.createPeople(dto);
  }

  @ApiOperation({ summary: 'Update person' })
  @ApiResponse({ status: 200, type: UpdatePeopleDTO })
  @Put(':id')
  updateById(@Param() params: ParamDTO, @Body() dto: UpdatePeopleDTO) {
    return this.peopleService.updatePeopleById(params.id, dto);
  }

  @ApiOperation({ summary: 'Delete person' })
  @ApiResponse({ status: 200, type: CreatePeopleDTO })
  @Delete(':id')
  deleteById(@Param() params: ParamDTO) {
    return this.peopleService.deletePeopleById(params.id);
  }
}
