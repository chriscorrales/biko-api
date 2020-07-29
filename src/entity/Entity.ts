import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

export class EntityBase {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public createDate: Date;

  @UpdateDateColumn()
  public updateDate: Date;
}
