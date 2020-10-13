import { Entity, Column } from 'typeorm';
import { EntityBase } from './Entity';

@Entity()
export class User extends EntityBase {
  @Column({ length: 350 })
  public email: string;

  @Column()
  public password: string;
}
