import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateVehiclesDTO } from "./create-vehicles.dto";
import { IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { E_Films } from "@src/films/films.enums";

export class UpdateVehiclesDTO extends PartialType(CreateVehiclesDTO) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly name?: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly model?:string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly manufacturer?:string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly cost_in_credits?:string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly length?:string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly max_atmosphering_speed?:string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly crew?:string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly passengers?:string

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    readonly cargo_capacity?:string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly consumables?:string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly vehicle_class?:string

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly pilots?: string[]

    @ApiProperty()
    @IsOptional()
    @IsEnum(E_Films, {each:true})
    films?:string[]
}