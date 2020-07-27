import { PrimaryGeneratedColumn, Entity } from 'typeorm'

export default abstract class GeneralModel {

    @PrimaryGeneratedColumn('increment')
    public id!: number;

    abstract toJson(): {};
}