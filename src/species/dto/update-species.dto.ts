import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSpeciesDTO } from './create-species.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { E_Films } from '@src/films/films.enums';

export class UpdateSpeciesDTO extends PartialType(CreateSpeciesDTO) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly classification?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly designation?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly average_height?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly skin_color?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly hair_color?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly eye_color?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly average_lifespan?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly homeworld?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly language?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  readonly people?: string[];

  @ApiProperty()
  @IsOptional()
  @IsEnum(E_Films, { each: true })
  readonly films?: string[];
}
