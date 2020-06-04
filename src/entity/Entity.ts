import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

export class EntityBase {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;

    @Column({ name: 'create_date' })
    public createDate: Date;

    @Column({ name: 'update_date' })
    public updateDate: Date;
}
