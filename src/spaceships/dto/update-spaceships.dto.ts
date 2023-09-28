import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateSpaceshipsDTO } from "./create-spaceships.dto";
import { E_Films } from "@src/films/films.enums";
import { IsString, IsNumberString, IsEnum, IsOptional } from "class-validator";

export class UpdateSpaceshipsDTO extends PartialType(CreateSpaceshipsDTO) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly name?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly model?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly manufacturer?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly cost_in_credits?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly length?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly max_atmosphering_speed?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly crew?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly passengers?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly cargo_capacity?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly consumables?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly hyperdrive_rating?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly MGLT?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString({ each: true })
    readonly pilots?: string[];
  
    @ApiProperty()
    @IsOptional()
    @IsEnum(E_Films, { each: true })
    readonly films?: string[];
}