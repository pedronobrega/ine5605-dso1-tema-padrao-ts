import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'
import GeneralModel from './GeneralModel'

@Entity('requests')
export class Request extends GeneralModel {

    @PrimaryGeneratedColumn('increment')
    public id!: number;
    
    @Column()
    devolution_date!: Date

    @Column()
    accepted!: boolean

    @Column({ length: 255 })
    reason!: string

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @DeleteDateColumn()
    deleted_at!: Date

    toJson() {
        return {
            id: this.id,
            devolution_date: this.devolution_date,
            accepted: this.accepted,
            reason: this.reason,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
}