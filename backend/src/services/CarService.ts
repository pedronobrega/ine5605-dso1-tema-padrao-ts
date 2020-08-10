import { getCustomRepository } from 'typeorm'
import CarRepository from '../repositories/CarRepository'

export default class CarService{

    private repository: CarRepository;
    private static instance: CarService

    private constructor (){
        this.repository = getCustomRepository(CarRepository)
    }

    public static getInstance() {
        if(!CarService.instance) {
            CarService.instance = new CarService()
        }

        return CarService.instance
    }

    public async find() {
        return await this.repository.find({
            where: {
                deleted_at: null
            }
        })
    }

    public async findById(id: number | string) {
        return await this.repository.findOne(id, {
            where: {
                deleted_at: null
            }
        })
    }

    public async create(body: {}) {
        return await this.repository.save(body)
    }

    public async update(id: number| string, body: {}) {
        try {
            await this.repository.update(id, body)
        } catch (error) {   
            console.log('error message >> ', error.message)
        }
        return this.findById(id)
    }

    public async delete(id: string | number) {
        const model = await this.findById(id)
        if(model && !model.deleted_at) {
            await this.repository.softDelete(id)
            return true
        }
        return false
    }

}