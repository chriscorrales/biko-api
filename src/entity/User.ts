import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { EntityBase } from './Entity';
import argon2 from 'argon2';
import { People } from './People';

@Entity()
export class User extends EntityBase {
  @Column({ length: 350 })
  public email: string;

  @Column()
  public password: string;

  @OneToOne(() => People)
  @JoinColumn()
  people: People;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
