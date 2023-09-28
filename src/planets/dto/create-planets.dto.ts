import { ApiProperty } from '@nestjs/swagger';
import { E_Films } from '@src/films/films.enums';
import { IsEnum, IsNumberString, IsString } from 'class-validator';

export class CreatePlanetsDTO {
  @ApiProperty({ example: '"Dantooine",', description: 'Planet name' })
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNumberString()
  readonly rotation_period: string;

  @ApiProperty()
  @IsNumberString()
  readonly orbital_period: string;

  @ApiProperty()
  @IsNumberString()
  readonly diametr: string;

  @ApiProperty()
  @IsString()
  readonly climate: string;

  @ApiProperty()
  @IsString()
  readonly gravity: string;

  @ApiProperty()
  @IsString()
  readonly terrain: string;

  @ApiProperty()
  @IsString()
  readonly surface_water: string;

  @ApiProperty()
  @IsNumberString()
  readonly population: string;

  @ApiProperty()
  @IsString({ each: true })
  readonly residents: string[];

  @ApiProperty()
  @IsEnum(E_Films, { each: true })
  readonly films: string[];
}