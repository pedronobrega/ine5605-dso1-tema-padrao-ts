import { Response, Request } from 'express'
import CarService from '../services/CarService'
import { Car } from '../models/Car'

export default {
    async get(req: Request, res: Response) {
        try {
            const carService = CarService.getInstance()
            const cars: Car[] = await carService.find()
            return res
                .status(200)
                .json(
                    cars.map(
                        car => (car.toJson())
                    )
                )
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async create(req: Request, res: Response) {
        try {
            const carService = CarService.getInstance()
            const car: Car = await carService.create(req.body)
            return res.status(201).json(car.toJson())
        } catch(error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async findById(req: Request, res: Response) {     
        const carService = CarService.getInstance()
        const car = await carService.findById(req.params.id)
        return res.status(200).json(car ? car.toJson() : {})
    },
    async update(req: Request, res: Response) {
        const carService = CarService.getInstance()
        const car: Car = await carService.update(req.params.id, req.body)
        return res.status(200).json(car ? car.toJson() : {})
    },
    async delete(req: Request, res: Response) {
        const carService = CarService.getInstance()
        const isDeleted = await carService.delete(req.params.id)
        return res.status(200).json(isDeleted)
    }
}