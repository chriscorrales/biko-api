import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from './Entity';
import { Vacancy } from './Vacancy';
import { Freelancer } from './Freelancer';

@Entity()
export class Selected extends EntityBase {
  @ManyToOne(() => Vacancy, (vacancy) => vacancy.selecteds)
  vacancy: Vacancy;

  @ManyToOne(() => Freelancer, (freelancer) => freelancer.selecteds)
  freelancer: Freelancer;
}
