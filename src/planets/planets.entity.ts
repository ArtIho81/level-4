import { People } from '../people/people.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Films } from '../films/films.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Images } from '@src/images/images.entity';

@Entity('planets')
@Unique(['name'])
export class Planets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: ''})
  rotation_period: string;

  @Column({default: ''})
  orbital_period: string;

  @Column({default: ''})
  diameter: string;

  @Column({default: ''})
  climate: string;

  @Column({default: ''})
  gravity: string;

  @Column({default: ''})
  terrain: string;

  @Column({default: ''})
  surface_water: string;

  @Column({default: ''})
  population: string;

  @OneToMany(() => People, (people) => people.homeworld)
  residents: Promise<People[]>;

  @ManyToMany(() => Films, (films) => films.planets)
  films: Promise<Films[]>;

  @OneToMany(() => Images, images => images.planets) 
images: Images[]

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column({default: 'localhost:3000/planets/'})
  url: string;
}
