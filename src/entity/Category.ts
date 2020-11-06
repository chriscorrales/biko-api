import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { EntityBase } from './Entity';
import { Freelancer } from './Freelancer';
import { Job } from './Job';

@Entity()
export class Category extends EntityBase {
  @Column({ length: 70 })
  public name: string;

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.categorys, {
    cascade: true,
  })
  @JoinTable()
  freelancers: Freelancer[];

  @ManyToMany(() => Job, (job) => job.categorys, {
    cascade: true,
  })
  @JoinTable()
  jobs: Job[];
}
