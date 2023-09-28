import { Body, Controller, Delete, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { FilmsService } from './films.service';
import { ParamIdPipe } from '../people/pipes/param-id.pipe';
import { CreateFilmsDTO } from './dto/create-films.dto';
import { updateFilmsDTO } from './dto/updata-films.dto';
import { TransformInterceptor } from '@src/utils/interceptors/transform.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('films')
@ApiTags('Films')
@UseInterceptors(TransformInterceptor)
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  getAllFilms() {
    return this.filmsService.getAllFilms();
  }
  @Get(':id')
  getFilmById(@Param('id', ParamIdPipe) id: number) {
    return this.filmsService.getFilmById(id);
  }
  @Post()
  addFilm(@Body() dto: CreateFilmsDTO) {
    return this.filmsService.addFilm(dto);
   }

  @Put(':id')
  updateFilmById(@Param('id', ParamIdPipe) id:number, @Body() dto: updateFilmsDTO) {
    return this.filmsService.updateFilm(id, dto)
  }

  @Delete(':id') 
  deleteFimById(@Param('id', ParamIdPipe) id: number) {
    return this.filmsService.deleteFilm(id)
  }

  @ApiOperation({ summary: 'Add images for people entity' })
  @ApiParam({ name: 'id', type: 'number', description: 'Person id' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post(':id')
  @UseInterceptors(FileInterceptor('image'))
  addImage(
    @Param('id', ParamIdPipe) id: number,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'image/jpeg',
        })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    image: Express.Multer.File,
  ) {
    return this.filmsService.addImageForFilm(id, image);
  }

  
}
