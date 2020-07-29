import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import GeneralModel from "./GeneralModel";
import { Request } from "./Request";

@Entity('users')
export class User extends GeneralModel {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ length: 255 })
    name!: string

    @Column()
    birthdate!: Date

    @Column({ length: 255 })
    role!: string

    @Column({ length: 255 })
    phone!: string

    @OneToMany(type => Request, user => User, { eager: true })
    requests!: Request[]

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @DeleteDateColumn()
    deleted_at!: Date

    toJson() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            role: this.role,
            phone: this.phone,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

}
