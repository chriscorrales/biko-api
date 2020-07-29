import {
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { EntityBase } from './Entity';
import { Freelancer } from './Freelancer';
import { Requestor } from './Requestor';
import { AddressJob } from './AddressJob';

@Entity()
export class Job extends EntityBase {
  @Column()
  public title!: string;

  @Column({ length: 350 })
  public description!: string;

  @Column()
  public status: string;

  @Column()
  public dateFinished: Date;

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.jobs)
  @JoinTable()
  freelancers: Freelancer[];

  @ManyToOne(() => Requestor, (requestor) => requestor.jobs)
  requestor: Requestor;

  @OneToOne(() => AddressJob)
  @JoinColumn()
  address: AddressJob;
}
