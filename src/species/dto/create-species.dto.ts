import { ApiProperty } from '@nestjs/swagger';
import { E_Films } from '@src/films/films.enums';
import { IsEnum, IsString } from 'class-validator';

export class CreateSpeciesDTO {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly classification: string;

  @ApiProperty()
  @IsString()
  readonly designation: string;

  @ApiProperty()
  @IsString()
  readonly average_height: string;

  @ApiProperty()
  @IsString()
  readonly skin_color: string;

  @ApiProperty()
  @IsString()
  readonly hair_color: string;

  @ApiProperty()
  @IsString()
  readonly eye_color: string;

  @ApiProperty()
  @IsString()
  readonly average_lifespan: string;

  @ApiProperty()
  @IsString()
  readonly homeworld: string;

  @ApiProperty()
  @IsString()
  readonly language: string;

  @ApiProperty()
  @IsString({ each: true })
  readonly people: string[];

  @ApiProperty()
  @IsEnum(E_Films, { each: true })
  readonly films: string[];
}
