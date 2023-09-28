import { ApiProperty } from '@nestjs/swagger';
import { Films } from '@src/films/films.entity';
import { Images } from '@src/images/images.entity';
import { People } from '@src/people/people.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';


@Entity('vehicles')
@Unique(['name'])
export class Vehicles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: ''})
  model: string;

  @Column({default: ''})
  manufacturer: string;

  @Column({default: ''})
  cost_in_credits: string;

  @Column({default: ''})
  length: string;

  @Column({default: ''})
  max_atmosphering_speed: string;

  @Column({default: ''})
  crew: string;

  @Column({default: ''})
  passengers: string;

  @Column({default: ''})
  cargo_capacity: string;

  @Column({default: ''})
  consumables: string;

  @Column({default: ''})
  vehicle_class: string;

  @ManyToMany(() => People, (people) => people.vehicles)
  pilots: Promise<People[]>;

  @ManyToMany(() => Films, (films) => films.vehicles)
  films: Promise<Films[]>;

  @OneToMany(() => Images, (images) => images.vehicles)
  images: Images[];

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column({default: 'localhost:3000/vehicles/'})
  url: string;
}
