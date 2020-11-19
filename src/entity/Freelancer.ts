import { Entity, OneToOne, JoinColumn, ManyToMany, Column, OneToMany } from 'typeorm';
import { People } from './People';
import { EntityBase } from './Entity';
import { Category } from './Category';
import { Vacancy } from './Vacancy';
import { Selected } from './Selected';

@Entity()
export class Freelancer extends EntityBase {
  @Column({ length: 255, nullable: true })
  public expText: string;

  @OneToOne(() => People)
  @JoinColumn()
  people: People;

  @ManyToMany(() => Vacancy, (vacancy) => vacancy.freelancers)
  vacancies: Vacancy[];

  @OneToMany(() => Selected, (selected) => selected.freelancer)
  selecteds: Selected[];

  @ManyToMany(() => Category, (category) => category.freelancers)
  categorys: Category[];
}
