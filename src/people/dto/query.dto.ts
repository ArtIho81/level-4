import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class QueryDTO {

  @ApiProperty({ example: 'localhost:3000/?page=2', description: "Query params" })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  readonly page?: number;
}
