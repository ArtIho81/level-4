import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFilmsDTO } from './create-films.dto';
import { IsOptional, IsString } from 'class-validator';

export class updateFilmsDTO extends PartialType(CreateFilmsDTO) {
  @ApiProperty({
    example: ['Luke Skywalker', 'Darth Vader'],
    description: 'Movie characters names',
  })
  @IsOptional()
  @IsString({ each: true })
  readonly characters?: string[];

  @ApiProperty({
    example: ['Human', 'Droid'],
  })
  @IsOptional()
  @IsString({ each: true })
  readonly species?: string[];

  @ApiProperty({
    example: ['Earth'],
  })
  @IsOptional()
  @IsString({ each: true })
  readonly planets?: string[];

  @ApiProperty({
    example: ['Star Destroyer', 'Death Star'],
  })
  @IsOptional()
  @IsString({ each: true })
  readonly starships?: string[];

  @ApiProperty({
    example: ['Sand Crawler', 'T-16 skyhopper'],
  })
  @IsOptional()
  @IsString({ each: true })
  readonly vehicles?: string[];
}
