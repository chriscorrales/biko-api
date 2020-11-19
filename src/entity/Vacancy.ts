import { Entity, ManyToMany, ManyToOne, JoinTable, OneToMany, Column } from 'typeorm';
import { EntityBase } from './Entity';
import { Freelancer } from './Freelancer';
import { Category } from './Category';
import { Job } from './Job';
import { Selected } from './Selected';

@Entity()
export class Vacancy extends EntityBase {
  @Column({ nullable: true })
  public amount: number;

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.vacancies, {
    cascade: true,
  })
  @JoinTable()
  freelancers: Freelancer[];

  @ManyToOne(() => Category, (category) => category.vacancies)
  category: Category;

  @ManyToOne(() => Job, (job) => job.vacancies)
  job: Job;

  @OneToMany(() => Selected, (selected) => selected.vacancy)
  selecteds: Selected[];
}
