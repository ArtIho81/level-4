import { Controller, Delete, InternalServerErrorException, Param } from '@nestjs/common';
import { ImagesService } from './images.service';
import { dataSource } from '@src/db/data-source';
import { Images } from './images.entity';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ParamIdPipe } from '@src/people/pipes/param-id.pipe';

@Controller('images')
@ApiTags("Images")
export class ImagesController {
    constructor(private readonly imagesService:ImagesService) {}
    
    @ApiOperation({ summary: 'Delete people entity images' })
    @ApiParam({ name: 'id', type: 'number', description: 'Image id' })
    @Delete(':id')
    deleteImage(@Param('id', ParamIdPipe) id: number) {
      return this.imagesService.deleteImage(id);
    }
}
