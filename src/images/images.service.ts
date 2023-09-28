import { Injectable, InternalServerErrorException, NotFoundException, Type } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Images } from './images.entity';
import { dataSource } from '@src/db/data-source';
import {S3} from 'aws-sdk'
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ImagesService {
  private readonly s3 = new S3() 
  constructor(private readonly configService: ConfigService) {}
  
  async uploadPublicFile(dataBuffer: Buffer, filename: string) {
    const s3 = new S3();
    const uploadResult = await s3.upload({
      Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
      Body: dataBuffer,
      Key: `${uuid()}-${filename}`
    })
      .promise();
 
    const newImage = new Images()
      newImage.path = uploadResult.Key,
      newImage.url = uploadResult.Location
    await dataSource.manager.save(newImage);
    return newImage;
  }


  private isFileDeleted = async (path: string) => await this.deleteFile(path);

  async removeImage(img: Images) {
    if (!(await this.isFileDeleted(img.path))) {
      throw new InternalServerErrorException();
    }
    await dataSource.manager.remove(img);
  }

  async saveFile(file: Express.Multer.File) {
    const uploadFolder = './uploads';
    try {
      if (!fs.existsSync(uploadFolder)) {
        fs.mkdirSync(uploadFolder, { recursive: true });
      }
      const uniqueFileName = `${Date.now()}-${file.originalname}`;
      const filePath = path.join(uploadFolder, uniqueFileName);
      await fs.promises.writeFile(filePath, file.buffer);
      return filePath;
    } catch (e) {}
  }

  async deleteFile(path: string) {
    try {
      await fs.promises.unlink(path);
      return true;
    } catch (e) {}
  }

  async addImage(file: Express.Multer.File) {
    const image = new Images();
    image.path = await this.saveFile(file);
    if (!image.path) {
      throw new InternalServerErrorException();
    }
    image.url = 'localhost:3000/images/'
    return await dataSource.manager.save(image);
  }

  async addImageForEntity<AllEntities>(
    id: number,
    image: Express.Multer.File,
    entity: Type<AllEntities>,
  ) {
    const whereConditions = {};
    whereConditions['id'] =  id;
    const entityInstance = await dataSource.manager.findOneBy(entity, whereConditions);
    if(!entityInstance) {
      throw new NotFoundException()
    }
    const newImage = await this.addImage(image);
    (await entityInstance['images']).push(newImage);
    return await dataSource.manager.save(entityInstance);
  }

  async deleteImage(id: number) {
    const image = await dataSource.manager.findOneBy(Images, { id });
    if(!image) {
      throw new NotFoundException()
    }
    if (!(await this.isFileDeleted(image.path))) {
      throw new InternalServerErrorException();
    }
    await dataSource.manager.remove(image);
  }
}
