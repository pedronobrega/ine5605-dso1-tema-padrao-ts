import { Repository } from "typeorm";
import { Car } from "../models/Car";
import { Key } from "../models/Key";

export default abstract class GeneralService {

    protected repository: any;

    constructor(repository: any) {
        this.repository = repository
    }

    async find() {
        return await this.repository.find()
    }

    async findById(id: number | string) {
        return await this.repository.findOne()
    }

    async create(body: {}) {
        return await this.repository.save(body)
    }

    async update(id: number| string, body: {}) {
        await this.repository.update(id, body)
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