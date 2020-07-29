import { Entity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { People } from './People';
import { Job } from './Job';
import { EntityBase } from './Entity';

@Entity()
export class Requestor extends EntityBase {
  @OneToOne(() => People)
  @JoinColumn()
  public people: People;

  @OneToMany(() => Job, (job) => job.requestor)
  jobs: Job[];
}
