import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, RelationId, JoinColumn } from 'typeorm'
import GeneralModel from './GeneralModel'
import { User } from './User';
import { Key } from './Key';

@Entity('requests')
export class Request extends GeneralModel {

    @PrimaryGeneratedColumn('increment')
    id?: number;
    
    @Column({ nullable: true })
    devolution_date?: Date

    @Column()
    accepted?: boolean

    @Column({ length: 255, nullable: true })
    reason?: string

    @ManyToOne(type => User, requests => Request, {nullable: false, eager: false })
    @JoinColumn({ name: 'user_id' })
    user?: User

    @ManyToOne(type => Key, requests => Request, { nullable: false, eager: false })
    @JoinColumn({ name: 'key_id' })
    key?: Key

    @CreateDateColumn()
    created_at?: Date

    @UpdateDateColumn()
    updated_at?: Date

    @DeleteDateColumn()
    deleted_at?: Date

    toJson() {
        return {
            id: this.id,
            user_id: this.user ? this.user.id : null,
            key_id: this.key ? this.key.id : null,
            devolution_date: this.devolution_date,
            accepted: this.accepted,
            reason: this.reason,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
}