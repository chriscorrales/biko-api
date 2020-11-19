import { Entity, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { EntityBase } from './Entity';
import { Requestor } from './Requestor';
import { AddressJob } from './AddressJob';
import { Vacancy } from './Vacancy';

@Entity()
export class Job extends EntityBase {
  @Column()
  public title: string;

  @Column({ length: 350 })
  public description: string;

  @Column({ type: 'int2' })
  public status: number;

  @Column({ nullable: true })
  public dateFinished: Date;

  @ManyToOne(() => Requestor, (requestor) => requestor.jobs)
  requestor: Requestor;

  @OneToOne(() => AddressJob)
  @JoinColumn()
  address: AddressJob;

  @OneToMany(() => Vacancy, (vacancy) => vacancy.job)
  vacancies: Vacancy[];
}
