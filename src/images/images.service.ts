import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImagesService {
  constructor() {}

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
}
