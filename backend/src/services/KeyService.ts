import GeneralService from "./GeneralService";
import { getCustomRepository } from 'typeorm'
import '../database/connection'
import KeyRepository from "../repositories/KeyRepository";

export default class KeyService extends GeneralService {

    private static instance: KeyService
    protected repository!: KeyRepository

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