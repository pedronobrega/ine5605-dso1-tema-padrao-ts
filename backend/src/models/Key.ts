import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import GeneralModel from './GeneralModel'
import { Car } from './Car';
import { Request } from './Request';

@Entity('keys')
export class Key extends GeneralModel{

    @PrimaryGeneratedColumn('increment')
    id?: number;
    
    @OneToOne(type => Car, key => Key, { eager: false })
    @JoinColumn({ name: 'car_id' })
    car?: Car

    @OneToMany(type => Request, key => Key, { eager: false })
    requests?: Request[]

    @CreateDateColumn()
    created_at?: Date

    @UpdateDateColumn()
    updated_at?: Date

    @DeleteDateColumn()
    deleted_at?: Date

    toJson() {
        return {
            id: this.id,
            car_id: this.car ? this.car.id : null,
            created_at: this.created_at,
            updated_at: this.updated_at,
        }
    }
}