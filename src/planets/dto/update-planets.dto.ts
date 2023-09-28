import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFilmsDTO } from '@src/films/dto/create-films.dto';
import { E_Films } from '@src/films/films.enums';
import { IsString, IsNumberString, IsEnum, IsOptional } from 'class-validator';

export class updatePlanetsDTO extends PartialType(CreateFilmsDTO) {
  @ApiProperty({ example: '"Dantooine",', description: 'Planet name' })
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  readonly rotation_period?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  readonly orbital_period?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  readonly diametr?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly climate?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly gravity?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly terrain?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly surface_water?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  readonly population?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  readonly residents?: string[];

  @ApiProperty()
  @IsOptional()
  @IsEnum(E_Films, { each: true })
  readonly films?: string[];
}
