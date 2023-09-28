import { ApiProperty } from "@nestjs/swagger";
import { E_Films } from "@src/films/films.enums";
import { IsEnum, IsNumberString, IsString } from "class-validator";

export class CreateVehiclesDTO {
    @ApiProperty()
    @IsString()
    readonly name: string

    @ApiProperty()
    @IsString()
    readonly model:string

    @ApiProperty()
    @IsString()
    readonly manufacturer:string

    @ApiProperty()
    @IsNumberString()
    readonly cost_in_credits:string

    @ApiProperty()
    @IsNumberString()
    readonly length:string

    @ApiProperty()
    @IsNumberString()
    readonly max_atmosphering_speed:string

    @ApiProperty()
    @IsString()
    readonly crew:string

    @ApiProperty()
    @IsNumberString()
    readonly passengers:string

    @ApiProperty()
    @IsNumberString()
    readonly cargo_capacity:string

    @ApiProperty()
    @IsString()
    readonly consumables:string

    @ApiProperty()
    @IsString()
    readonly vehicle_class:string

    @ApiProperty()
    @IsString()
    readonly pilots: string[]

    @ApiProperty()
    @IsEnum(E_Films, {each:true})
    films:string[]
}