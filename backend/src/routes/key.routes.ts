import { Router } from 'express'
import KeyController from '../controllers/KeyController'

const keyRouter = Router()

keyRouter.get('/', KeyController.get)
keyRouter.post('/', KeyController.create)
keyRouter.get('/:id', KeyController.findById)
keyRouter.put('/:id', KeyController.update)
keyRouter.delete('/:id', KeyController.delete)

export default keyRouter