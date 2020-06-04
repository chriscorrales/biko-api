import { Entity, Column } from 'typeorm';
import { EntityBase } from './Entity';

@Entity({ name: 'TPeople' })
export class People extends EntityBase {
    @Column({ name: 'full_name' })
    public fullName: string;

    @Column({ name: 'birthday_date' })
    public birthdayDate: Date;

    @Column({ name: 'phone' })
    public phone: string;

    @Column({ name: 'persontype' })
    public personType: string;

    @Column({ name: 'gender' })
    public gender: string;

    @Column({ name: 'image' })
    public image: string;
}
