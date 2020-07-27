import { getCustomRepository } from 'typeorm'
import CarRepository from '../repositories/CarRepository'
import GeneralService from './GeneralService'

export default class CarService extends GeneralService{

    private static instance: CarService

    private constructor (){
        super(getCustomRepository(CarRepository))
    }

    public static getInstance() {
        if(!CarService.instance) {
            CarService.instance = new CarService()
        }

        return CarService.instance
    }

}