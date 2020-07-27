import { getCustomRepository } from 'typeorm'
import '../database/connection'
import CarRepository from '../repositories/CarRepository'
import GeneralService from './GeneralService'

export default class CarService extends GeneralService{

    private repository: CarRepository;

    constructor (){
        super()
        this.repository = getCustomRepository(CarRepository)
    }

    async find() {
        return await this.repository.find()
    }

    async findById(id: number | string) {
        return await this.repository.findOne(id)
    }

    async create(body: {}) {
        return await this.repository.save(body)
    }

    async update(id: number| string, body: {}) {
        await this.repository.update(id, body)
        return this.findById(id)
    }

    async delete(id: string | number) {
        const car = await this.findById(id)
        if(car && !car.deleted_at) {
            await this.repository.softDelete(id)
        }
        return true
    }

}