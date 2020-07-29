import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { EntityBase } from './Entity';
import { People } from './People';

@Entity()
export class LegalPerson extends EntityBase {
  @Column()
  public cnpj: string;

  @Column()
  public documentImage: string;

  @OneToOne(() => People)
  @JoinColumn()
  people: People;
}
