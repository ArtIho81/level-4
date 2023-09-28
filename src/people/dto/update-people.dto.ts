import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleDTO } from './create-people.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { E_PeopleGender } from '../people.enums';
import { E_Films } from '@src/films/films.enums';

export class UpdatePeopleDTO extends PartialType(CreatePeopleDTO) {
  @ApiProperty({
    example: 'John Doe',
    description: 'Person name',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  @ApiProperty({
    example: '166',
    description: 'String with numeric value',
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  readonly height?: string;

  @ApiProperty({
    example: '77',
    description: 'String with numeric value',
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  readonly mass?: string;

  @ApiProperty({
    example: 'brown',
    description: 'Hair color',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly hair_color?: string;

  @ApiProperty({
    example: 'pink',
    description: 'Skin color',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly skin_color?: string;

  @ApiProperty({
    example: 'green',
    description: 'Eyes color',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly eye_color?: string;

  @ApiProperty({
    example: '896BBY',
    description: 'String with numeric value and BBY or unknown',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly birth_year?: string;

  @ApiProperty({
    example: 'female',
    description: 'female | male | hermafrodite | n/a',
    required: false,
  })
  @IsOptional()
  @IsEnum(E_PeopleGender)
  readonly gender?: string;

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly homeworld?: string;

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsEnum(E_Films, { each: true })
  readonly films?: E_Films[];

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly species?: string[];

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly vehicles?: string[];

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly starships?: string[];

  @ApiProperty({
    example: '',
    description: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly url?: string;
}
