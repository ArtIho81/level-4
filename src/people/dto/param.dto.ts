import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt, Min } from "class-validator";

export class ParamDTO {
  @ApiProperty({
    example: 'localhost:3000/2',
    description: 'Dinamic params',
  })
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  id: number;
}