import { Entity, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { People } from './People';
import { Job } from './Job';
import { EntityBase } from './Entity';
import { Category } from './Category';

@Entity()
export class Freelancer extends EntityBase {
  @OneToOne(() => People)
  @JoinColumn()
  people: People;

  @ManyToMany(() => Job, (job) => job.freelancers)
  jobs: Job[];

  @ManyToMany(() => Category, (category) => category.freelancers)
  categorys: Category[];
}
