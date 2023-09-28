import { ApiProperty } from '@nestjs/swagger';
import { Images } from '@src/images/images.entity';
import { Films } from 'src/films/films.entity';
import { People } from 'src/people/people.entity';
import {
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

@Entity('spaceships')
@Unique(['name'])
export class Spaceships {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '' })
  model: string;

  @Column({ default: '' })
  manufacturer: string;

  @Column({ default: '' })
  cost_in_credits: string;

  @Column({ default: '' })
  length: string;

  @Column({ default: '' })
  max_atmosphering_speed: string;

  @Column({ default: '' })
  crew: string;

  @Column({ default: '' })
  passengers: string;

  @Column({ default: '' })
  cargo_capacity: string;

  @Column({ default: '' })
  consumables: string;

  @Column({ default: '' })
  hyperdrive_rating: string;

  @Column({ default: '' })
  MGLT: string;

  @Column({ default: '' })
  starship_class: string;

  @ManyToMany(() => People, (people) => people.starships)
  pilots: Promise<People[]>;

  @ManyToMany(() => Films, (films) => films.starships)
  films: Promise<Films[]>;

  @OneToMany(() => Images, (images) => images.starships)
  images: Images[];

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column({ default: 'localhost:3000/starships/' })
  url: string;
}
