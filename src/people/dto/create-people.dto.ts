import { IsArray, IsEnum, IsNumber, IsNumberString, IsString } from 'class-validator';
import { E_PeopleGender } from '../people.enums';
import { ApiProperty } from '@nestjs/swagger';

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

  @IsString()
  readonly hair_color: string;

  @IsString()
  readonly skin_color: string;

  @IsString()
  readonly eye_color: string;

  @IsString()
  readonly birth_year: string;

  @IsEnum(E_PeopleGender)
  readonly gender: string;

  @IsString()
  readonly homeworld: string;

  @IsString()
  readonly films: string[];

  @IsArray()
  readonly species: string[];

  @IsArray()
  readonly vehicles: string[];

  @IsArray()
  readonly starships: string[];

  @IsString()
  readonly created: string;

  @IsString()
  readonly edited: string;

  @IsString()
  readonly url: string;
}
