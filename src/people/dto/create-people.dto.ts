import {
  IsEnum,
  IsNumberString,
  IsString,
} from 'class-validator';
import { E_PeopleGender } from '../people.enums';
import { ApiProperty } from '@nestjs/swagger';
import { E_Films } from '@src/films/films.enums';

export class CreatePeopleDTO {
  @ApiProperty({ example: 'John Doe', description: 'Person name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '166', description: 'String with numeric value' })
  @IsNumberString()
  readonly height: string;

  @ApiProperty({ example: '77', description: 'String with numeric value' })
  @IsNumberString()
  readonly mass: string;

  @ApiProperty({ example: 'brown', description: 'Hair color' })
  @IsString()
  readonly hair_color: string;

  @ApiProperty({ example: 'yellow', description: 'Skin color' })
  @IsString()
  readonly skin_color: string;

  @ApiProperty({ example: 'blue', description: 'Eyes color' })
  @IsString()
  readonly eye_color: string;

  @ApiProperty({ example: '102BBY' })
  @IsString()
  readonly birth_year: string;

  @ApiProperty({ example: 'male | female | hermafrodite | n/a' })
  @IsEnum(E_PeopleGender)
  readonly gender: string;

  @ApiProperty({ example: 'Earth' })
  @IsString()
  readonly homeworld: string;

  @ApiProperty({
    example: ['The Phantom Menace'],
  })
  @IsEnum(E_Films, {each:true})
  readonly films: E_Films[];

  @ApiProperty({ example: ['Human'] })
  @IsString({each:true})
  readonly species: string[];

  @ApiProperty({ example: ["Sand Crawler", "T-16 skyhopper"] })
  @IsString({each:true})
  readonly vehicles: string[];

  @ApiProperty({ example: ["Star Destroyer", "Sentinel-class landing craft"] })
  @IsString({each:true})
  readonly starships: string[];

  @ApiProperty({ example: 'http://' })
  @IsString()
  readonly url: string;
}
