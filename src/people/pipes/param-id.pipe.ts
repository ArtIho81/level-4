import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParamIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const id = +value;
    if (isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new BadRequestException();
    }
    return id;
  }
}
