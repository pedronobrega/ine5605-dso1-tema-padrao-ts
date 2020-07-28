import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import GeneralModel from './GeneralModel'

@Entity('cars')
export class Car extends GeneralModel{

    @PrimaryGeneratedColumn('increment')
    public id!: number;

    @Column({ length: 255 })
    plate!: string

    @Column({ length: 255 })
    model!: string

    @Column({ length: 255 })
    brand!: string

    @Column({ unsigned: true })
    year!: number

    @Column({ unsigned: true })
    kilometer!: number

    @Column({ unsigned: true })
    tier!: number

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @DeleteDateColumn()
    deleted_at!: Date

    toJson() {
        return {
            id: this.id,
            plate: this.plate,
            model: this.model,
            brand: this.brand,
            year: this.year,
            kilometer: this.kilometer,
            tier: this.tier,
            created_at: this.created_at,
            updated_at: this.updated_at,
        }
    }
}