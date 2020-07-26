import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cars')
export class Car {

    @PrimaryGeneratedColumn('increment')
    id!: number

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

}