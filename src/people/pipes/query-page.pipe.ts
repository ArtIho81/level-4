import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class QueryPagePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (Object.keys(value).length === 0) {
      return;
    }
    const page = +value.page;
    if (isNaN(page) || !Number.isInteger(page) || page < 0) {
      throw new BadRequestException('Incorrect Query');
    }
    return page;
  }
}
