import { Equal } from "typeorm";


export default abstract class GeneralService {

    protected repository: any;

    constructor(repository: any) {
        this.repository = repository
    }

    async find() {
        return await this.repository.find({
            where: {
                deleted_at: null
            }
        })
    }

    async findById(id: number | string) {
        return await this.repository.findOne(id, {
            where: {
                deleted_at: null
            }
        })
    }

    async create(body: {}) {
        return await this.repository.save(body)
    }

    async update(id: number| string, body: {}) {
        try {
            await this.repository.update(id, body)
        } catch (error) {   
            console.log('error message >> ', error.message)
        }
        return this.findById(id)
    }

    async delete(id: string | number) {
        const model = await this.findById(id)
        if(model && !model.deleted_at) {
            await this.repository.softDelete(id)
        }
        return true
    }

}