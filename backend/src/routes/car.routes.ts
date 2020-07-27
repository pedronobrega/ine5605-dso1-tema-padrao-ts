import { Router } from 'express'
import CarController from '../controllers/CarController'

const carRouter = Router()

carRouter.get('/', CarController.get)
carRouter.post('/', CarController.create)
carRouter.get('/:id', CarController.findById)
carRouter.put('/:id', CarController.update)
carRouter.delete('/:id', CarController.delete)

export default carRouter