import { PrimaryGeneratedColumn, Entity } from 'typeorm'

export default abstract class GeneralModel {

    abstract toJson(): {};
    
}