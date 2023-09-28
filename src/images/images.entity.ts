import { Films } from '@src/films/films.entity';
import { People } from '../people/people.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Species } from '@src/species/species.entity';
import { Planets } from '@src/planets/planets.entity';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  url: string

  @ManyToOne(() => People, (people) => people.images)
  people: People;

  @ManyToOne(() => Films, (films) => films.images)
  films: Films;

  @ManyToOne(() => Species, (species) => species.images)
  species: Species;

  @ManyToOne(() => Planets, (planets) => planets.images)
  planets: Planets;

  @ManyToOne(() => Spaceships, (starships) => starships.images)
  starships: Spaceships;

  @ManyToOne(() => Vehicles, (vehicles) => vehicles.images)
  vehicles: Vehicles;
}
