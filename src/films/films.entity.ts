import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { People } from '../people/people.entity';
import { Planets } from '../planets/planets.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Species } from '@src/species/species.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';
import { Images} from '@src/images/images.entity';


@Entity('films')
@Unique(['title'])
export class Films {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
    @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({default: 0, type: 'int'})
  episode_id: number;

  @ApiProperty()
  @Column('text')
  opening_crawl: string;

  @ApiProperty()
  @Column({default: ''})
  director: string;

  @ApiProperty()
  @Column({default: ''})
  producer: string;

  @ApiProperty()
  @Column({default: ''})
  release_date: string;

  @ApiProperty()
  @ManyToMany(() => People, (people) => people.films)
  characters: Promise<People[]>;

  @ApiProperty()
  @ManyToMany(() => Planets, (planets) => planets.films)
  @JoinTable()
  planets: Promise<Planets[]>;

  @ApiProperty()
  @ManyToMany(() => Spaceships, (spaceships) => spaceships.films)
  @JoinTable()
  starships: Promise<Spaceships[]>;

  @ApiProperty()
  @ManyToMany(() => Species, species => species.films)
  @JoinTable()
  species: Promise<Species[]>

  @ApiProperty()
  @ManyToMany(() => Vehicles, vehicles => vehicles.films)
  @JoinTable()
  vehicles: Promise<Vehicles[]>

  @OneToMany(() => Images, images => images.films)
  images: Promise<Images[]>


  @ApiProperty()
  @CreateDateColumn({type:'timestamp'})
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({type:'timestamp'})
  updatedAt: Date;

  @ApiProperty()
  @Column({default: 'localhost:3000/films/'})
  url: string;
}
