import GeneralService from "./GeneralService";
import { getCustomRepository } from 'typeorm'
import KeyRepository from "../repositories/KeyRepository";

export default class KeyService extends GeneralService {

    private static instance: KeyService

    private constructor() {
        super(getCustomRepository(KeyRepository))
    }

    public static getInstance() {
        if(!KeyService.instance) {
            KeyService.instance = new KeyService()
        }

        return KeyService.instance
    }
    
}