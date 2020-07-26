import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

@Entity('requests')
export class Request {

    @PrimaryGeneratedColumn('increment')
    id!: number

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
}