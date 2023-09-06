import { ApiProperty } from '@nestjs/swagger';
import { People_Images } from 'src/images/images.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('people')
export class People {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  height: string;

  @ApiProperty()
  @Column()
  mass: string;

  @ApiProperty()
  @Column()
  hair_color: string;

  @ApiProperty()
  @Column()
  skin_color: string;

  @ApiProperty()
  @Column()
  eye_color: string;

  @ApiProperty()
  @Column()
  birth_year: string;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiProperty()
  @Column()
  homeworld: string;

  @ApiProperty()
  @Column()
  films: string;

  @ApiProperty()
  @Column()
  species: string;

  @ApiProperty()
  @Column()
  vehicles: string;

  @ApiProperty()
  @Column()
  starships: string;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column()
  url: string;

  @OneToMany(type => People_Images, image => image.people)
  images: People_Images[]
}
