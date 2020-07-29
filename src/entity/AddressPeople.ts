import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityBase } from './Entity';
import { People } from './People';

@Entity()
export class AddressPeople extends EntityBase {
  @Column({ length: 50 })
  public country: string;

  @Column({ length: 50 })
  public district: string;

  @Column({ length: 70 })
  public street: string;

  @Column({ length: 50 })
  public city: string;

  @Column()
  public state: string;

  @Column()
  public postalCode: string;

  @Column()
  public residenceNumber: number;

  @Column()
  public name: string;

  @Column()
  public isFavorite: boolean;

  @ManyToOne(() => People, (people) => people.addresses)
  people: People;
}
