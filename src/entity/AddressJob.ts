import { Entity, Column, OneToOne } from 'typeorm';
import { EntityBase } from './Entity';
import { Job } from './Job';

@Entity()
export class AddressJob extends EntityBase {
  @Column({ length: 50 })
  public country: string;

  @Column({ length: 50 })
  public district: string;

  @Column({ length: 70 })
  public street: string;

  @Column({ length: 50 })
  public city: string;

  @Column()
  public state: string;

  @Column()
  public postalCode: string;

  @Column()
  public residenceNumber: number;

  @OneToOne(() => Job, (job) => job.address)
  public job: Job;
}
