import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import GeneralModel from "./GeneralModel";

@Entity('users')
export class User extends GeneralModel {

    @Column({ length: 255 })
    name!: string

    @Column()
    birthdate!: Date

    @Column({ length: 255 })
    role!: string

    @Column({ length: 255 })
    phone!: string

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
