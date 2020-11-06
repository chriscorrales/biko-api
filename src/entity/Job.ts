import { Entity, Column, ManyToMany, ManyToOne, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { EntityBase } from './Entity';
import { Freelancer } from './Freelancer';
import { Requestor } from './Requestor';
import { AddressJob } from './AddressJob';
import { Category } from './Category';

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

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.jobs, {
    cascade: true,
  })
  @JoinTable()
  freelancers: Freelancer[];

  @ManyToMany(() => Category, (category) => category.jobs)
  categorys: Category[];

  @ManyToOne(() => Requestor, (requestor) => requestor.jobs)
  requestor: Requestor;

  @OneToOne(() => AddressJob)
  @JoinColumn()
  address: AddressJob;
}
