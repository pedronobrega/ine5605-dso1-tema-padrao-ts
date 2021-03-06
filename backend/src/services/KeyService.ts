import { getCustomRepository } from 'typeorm'
import KeyRepository from "../repositories/KeyRepository";

export default class KeyService {

    private repository: KeyRepository;
    private static instance: KeyService

    private constructor() {
        this.repository = getCustomRepository(KeyRepository)
    }

    public static getInstance() {
        if(!KeyService.instance) {
            KeyService.instance = new KeyService()
        }

        return KeyService.instance
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
        }
        return true
    }
    
}