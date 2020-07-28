import GeneralService from "./GeneralService";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/UserRepository";

export default class UserService extends GeneralService {

    private static instance: UserService

    private constructor() {
        super(getCustomRepository(UserRepository))
    }

    public static getInstance() {
        if(!UserService.instance) {
            UserService.instance = new UserService()
        }

        return UserService.instance
    }

}