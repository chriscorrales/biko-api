import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { EntityBase } from './Entity';
import { Freelancer } from './Freelancer';
import { Vacancy } from './Vacancy';

@Entity()
export class Category extends EntityBase {
  @Column({ length: 70 })
  public name: string;

  @ManyToMany(() => Freelancer, (freelancer) => freelancer.categorys, {
    cascade: true,
  })
  @JoinTable()
  freelancers: Freelancer[];

  @OneToMany(() => Vacancy, (vacancy) => vacancy.category)
  vacancies: Vacancy[];
}
