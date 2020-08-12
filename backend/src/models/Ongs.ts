import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Incidents } from "./Incidents";

@Entity()
export class Ongs {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    unique: true,
  })
  userId!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  whatsapp!: string;

  @Column()
  city!: string;

  @Column()
  uf!: string;

  @OneToMany((type) => Incidents, (ong) => Ongs)
  incidents!: Incidents[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
