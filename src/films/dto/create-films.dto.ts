import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  E_Director,
  E_Films,
  E_OpeningCrawl,
  E_Producer,
  E_ReleaseDate,
} from '../films.enums';
export class CreateFilmsDTO {
  @ApiProperty({ example: 'A New Hope', description: 'Film title' })
  @IsEnum(E_Films)
  readonly title: E_Films;

  // @ApiProperty({ example: 3 })
  // @IsNumber()
  // @Min(1)
  // @Max(6)
  // readonly episode_id: number;

  // @ApiProperty()
  // @IsEnum(E_OpeningCrawl)
  // readonly opening_crawl: string;

  // @ApiProperty()
  // @IsEnum(E_Director)
  // readonly director: string;

  // @ApiProperty()
  // @IsEnum(E_Producer)
  // readonly producer: string

  // @ApiProperty({example: "2005-05-19"})
  // @IsEnum(E_ReleaseDate)
  // readonly release_date: string;

  @ApiProperty({
    example: ['Luke Skywalker', 'Darth Vader'],
    description: 'Movie characters names',
  })
  @IsString({ each: true })
  readonly characters: string[];

  @ApiProperty({
    example: ['Human', 'Droid'],
  })
  @IsString({ each: true })
  readonly species: string[];

  @ApiProperty({
    example: ['Earth'],
  })
  @IsString({ each: true })
  readonly planets: string[];

  @ApiProperty({
    example: ['Star Destroyer', 'Death Star'],
  })
  @IsString({ each: true })
  readonly starships: string[];

  @ApiProperty({
    example: ['Sand Crawler', 'T-16 skyhopper'],
  })
  @IsString({ each: true })
  readonly vehicles: string[];
}
