import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'
import GeneralModel from './GeneralModel'

@Entity('keys')
export class Key extends GeneralModel{

    @PrimaryGeneratedColumn('increment')
    public id!: number;
    
    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @DeleteDateColumn()
    deleted_at!: Date

    toJson() {
        return {
            id: this.id,
            created_at: this.created_at,
            updated_at: this.updated_at,
        }
    }
}