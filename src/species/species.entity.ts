import { ApiProperty } from '@nestjs/swagger';
import { Films } from '@src/films/films.entity';
import { Images } from '@src/images/images.entity';
import { People } from '@src/people/people.entity';
import { Planets } from '@src/planets/planets.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('species')
@Unique(['name'])
export class Species {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ default: '' })
  classification: string;

  @ApiProperty()
  @Column({ default: '' })
  designation: string;

  @ApiProperty()
  @Column({ default: '' })
  average_height: string;

  @ApiProperty()
  @Column({ default: '' })
  skin_colors: string;

  @ApiProperty()
  @Column({ default: '' })
  hair_colors: string;

  @ApiProperty()
  @Column({ default: '' })
  eye_colors: string;

  @ApiProperty()
  @Column({ default: '' })
  average_lifespan: string;

  @ApiProperty()
  @OneToOne(() => Planets)
  @JoinColumn()
  homeworld: Promise<Planets>;

  @ApiProperty()
  @Column({ default: '' })
  language: string;

  @ApiProperty()
  @ManyToMany(() => People, (people) => people.species)
  people: Promise<People[]>;

  @ApiProperty()
  @ManyToMany(() => Films, (films) => films.species)
  films: Promise<Films[]>;

  @OneToMany(() => Images, (image) => image.species)
  images: Images[];

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @Column({default: 'localhost:3000/species/'})
  url: string;

}
