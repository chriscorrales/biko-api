import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { EntityBase } from './Entity';
import { People } from './People';

@Entity()
export class Token extends EntityBase {
  @Column()
  public partnerId: string;

  @Column()
  public origin: string;

  @Column()
  public captchaScore: string;

  @Column()
  public ip: string;

  @Column()
  public ssid: string;

  @Column()
  public targetApp: string;

  @OneToOne(() => People)
  @JoinColumn()
  people: People;
}
