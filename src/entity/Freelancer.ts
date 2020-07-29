import { Entity, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { People } from './People';
import { Job } from './Job';
import { EntityBase } from './Entity';

@Entity()
export class Freelancer extends EntityBase {
  @OneToOne(() => People)
  @JoinColumn()
  people: People;

  @ManyToMany(() => Job, (job) => job.freelancers)
  jobs: Job[];
}
