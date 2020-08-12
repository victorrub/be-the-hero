import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { Ongs } from "./Ongs";

@Entity()
export class Incidents {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column("double")
  value!: number;

  @ManyToOne((type) => Ongs, (incidents) => Incidents, {
    eager: true,
    onDelete: "CASCADE",
  })
  ong!: Ongs;

  @CreateDateColumn()
  createdAt!: Date;

  @CreateDateColumn()
  updatedAt!: Date;
}
