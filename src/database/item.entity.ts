import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class itemEntity{
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    name:string
    @Column()
    price:string
}