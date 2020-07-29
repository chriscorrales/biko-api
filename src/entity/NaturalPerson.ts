import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { EntityBase } from './Entity';
import { People } from './People';

@Entity()
export class NaturalPerson extends EntityBase {
  @Column({ name: 'cpf' })
  public cpf: string;

  @Column({ name: 'document_image' })
  public documentImage: string;

  @OneToOne(() => People)
  @JoinColumn()
  people: People;
}
