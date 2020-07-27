import { Response, Request } from 'express'
import { getRepository, getCustomRepository } from 'typeorm'
import { Car } from '../models/Car'
import CarService from '../services/CarService'
import CarRepository from '../repositories/CarRepository'

export default {
    async get(req: Request, res: Response) {
        try {
            const carService = new CarService()
            const cars = await carService.find()
            return res.status(200).json(cars.map(car => (car.toJson())))
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async create(req: Request, res: Response) {
        try {
            const carService = new CarService()
            const car = await carService.create(req.body)
            return res.status(201).json(car)
        } catch(error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async findById(req: Request, res: Response) {     
        const carService = new CarService()
        const car = await carService.findById(req.params.id)
        return res.status(200).json(car ? car.toJson() : {})
    },
    async update(req: Request, res: Response) {
        const carService = new CarService()
        const car = await carService.update(req.params.id, req.body)
        return res.status(200).json(car ? car.toJson() : {})
    },
    async delete(req: Request, res: Response) {
        const carService = new CarService()
        const isDeleted = await carService.delete(req.params.id)
        return res.status(200).json(isDeleted)
    }
}