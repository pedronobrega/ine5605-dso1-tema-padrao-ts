import GeneralService from "./GeneralService";
import RequestRepository from "../repositories/RequestRepository";
import { getCustomRepository } from "typeorm";

export default class RequestService extends GeneralService {

    private static instance: RequestService

    private constructor() {
        super(getCustomRepository(RequestRepository))
    }

    public getInstance() {
        if(!RequestService.instance) {
            RequestService.instance = new RequestService()
        }

        return RequestService.instance
    }

}