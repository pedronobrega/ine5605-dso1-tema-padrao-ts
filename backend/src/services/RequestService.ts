import GeneralService from "./GeneralService";
import RequestRepository from "../repositories/RequestRepository";
import { getCustomRepository, Equal } from "typeorm";
import { Request } from "../models/Request";

export default class RequestService extends GeneralService {

    private static instance: RequestService
    protected repository!: RequestRepository

    private constructor() {
        super(getCustomRepository(RequestRepository))
    }

    public static getInstance() {
        if(!RequestService.instance) {
            RequestService.instance = new RequestService()
        }

        return RequestService.instance
    }

    public async endRequest(id: number | string) {
        const request: Request = await this.update(
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

}