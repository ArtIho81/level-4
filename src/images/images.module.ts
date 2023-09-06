import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People_Images } from './images.entity';

@Module({
    imports: [TypeOrmModule.forFeature([People_Images])]
})
export class ImagesModule {


}
