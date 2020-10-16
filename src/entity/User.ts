import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { EntityBase } from './Entity';
import argon2 from 'argon2';

@Entity()
export class User extends EntityBase {
  @Column({ length: 350 })
  public email: string;

  @Column()
  public password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
