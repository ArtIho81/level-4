import { People } from "../people/people.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class People_Images {

    @PrimaryGeneratedColumn()
    id: number;    

    @Column()
    path: string

    @ManyToOne(type => People, people => people.images)
    people: People
 }
