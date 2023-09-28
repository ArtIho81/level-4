import { ApiProperty } from '@nestjs/swagger';
import { Films } from '../films/films.entity';
import { Images } from '../images/images.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  Unique,
  BeforeInsert,
} from 'typeorm';
import { Planets } from '@src/planets/planets.entity';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Species } from '@src/species/species.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';

@Entity('people')
@Unique(['name'])
export class People {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ default: '' })
  height: string;

  @ApiProperty()
  @Column({ default: '' })
  mass: string;

  @ApiProperty()
  @Column({ default: '' })
  hair_color: string;

  @ApiProperty()
  @Column({ default: '' })
  skin_color: string;

  @ApiProperty()
  @Column({ default: '' })
  eye_color: string;

  @ApiProperty()
  @Column({ default: '' })
  birth_year: string;

  @ApiProperty()
  @Column({ default: '' })
  gender: string;

  @ApiProperty()
  @ManyToOne(() => Planets, (planets) => planets.residents)
  homeworld: Promise<Planets>;

  @ManyToMany(() => Films, (films) => films.characters)
  @JoinTable()
  films: Promise<Films[]>;

  @ApiProperty()
  @ManyToMany(() => Species, (species) => species.people)
  @JoinTable()
  species: Promise<Species[]>;

  @ApiProperty()
  @ManyToMany(() => Vehicles, (vehicles) => vehicles.pilots)
  @JoinTable()
  vehicles:Promise<Vehicles[]>;

  @ApiProperty()
  @ManyToMany(() => Spaceships, (spaceships) => spaceships.pilots)
  @JoinTable()
  starships: Promise<Spaceships[]>;

  @OneToMany(() => Images, (images) => images.people)
  images: Promise<Images[]>;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column({ default: 'localhost:3000/people/' })
  url: string;
}
