import RequestRepository from "../repositories/RequestRepository";
import { getCustomRepository, Equal } from "typeorm";
import { Request } from "../models/Request.entity";

export default class RequestService {

    private static instance: RequestService
    private repository!: RequestRepository

    private constructor() {
        this.repository = getCustomRepository(RequestRepository)
    }

    public static getInstance() {
        if(!RequestService.instance) {
            RequestService.instance = new RequestService()
        }

        return RequestService.instance
    }

    public async endRequest(id: number | string) {
        const request: Request | undefined = await this.update(
            id, 
            {devolution_date: new Date(Date.now())}
        )
        return request
    }

    public async findRequestByUserId(userId: number | string) {
        const requests: Request[] = await this.repository.find({
            where: {
                devolution_date: null,
                user: Equal(userId)
            }
        })
        return requests
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