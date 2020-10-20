import { Entity, Column, OneToMany, OneToOne } from 'typeorm';
import { EntityBase } from './Entity';
import { LegalPerson } from './LegalPerson';
import { NaturalPerson } from './NaturalPerson';
import { AddressPeople } from './AddressPeople';
import { Freelancer } from './Freelancer';
import { Requestor } from './Requestor';

@Entity()
export class People extends EntityBase {
  @Column()
  public fullName: string;

  @Column()
  public birthdayDate: Date;

  @Column()
  public phone: string;

  @Column({ enum: ['F', 'J', 'A'] })
  public personType: string;

  @Column({ enum: ['F', 'M', 'O'] })
  public gender: string;

  @Column()
  public image: string;

  @OneToMany(() => AddressPeople, (address) => address.people)
  public addresses: AddressPeople[];

  @OneToOne(() => LegalPerson, (legalPerson) => legalPerson.people)
  legalPerson: LegalPerson;

  @OneToOne(() => NaturalPerson, (naturalPerson) => naturalPerson.people)
  naturalPerson: NaturalPerson;

  @OneToOne(() => Freelancer, (freelancer) => freelancer.people)
  freelancer: Freelancer;

  @OneToOne(() => Requestor, (requestor) => requestor.people)
  requestor: Requestor;
}
