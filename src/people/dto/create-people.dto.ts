import { IsEnum, IsNumberString, IsString } from 'class-validator';
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

  @ApiProperty({ example: 'brown', description: 'Hair color' })
  @IsString()
  readonly hair_color: string;

  @ApiProperty({ example: 'yellow', description: 'Skin color' })
  @IsString()
  readonly skin_color: string;

  @ApiProperty({ example: 'blue', description: 'Eyes color' })
  @IsString()
  readonly eye_color: string;

  @ApiProperty({ example: '102BBY' })
  @IsString()
  readonly birth_year: string;

  @ApiProperty({ example: 'male | female | hermafrodite | n/a' })
  @IsEnum(E_PeopleGender)
  readonly gender: string;

  @ApiProperty({ example: 'Earth' })
  @IsString()
  readonly homeworld: string;

  @ApiProperty({ example: '' })
  @IsString()
  readonly films: string;

  @ApiProperty({ example: '' })
  @IsString()
  readonly species: string;

  @ApiProperty({ example: '' })
  @IsString()
  readonly vehicles: string;

  @ApiProperty({ example: '' })
  @IsString()
  readonly starships: string;

  @ApiProperty({ example: 'http://' })
  @IsString()
  readonly url: string;
}
