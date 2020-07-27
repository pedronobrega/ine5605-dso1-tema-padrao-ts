import { Router } from 'express'
import RequestController from '../controllers/RequestController'

const requestRouter = Router()

requestRouter.get('/', RequestController.get)
requestRouter.post('/', RequestController.create)
requestRouter.get('/:id', RequestController.findById)
requestRouter.put('/:id', RequestController.update)
requestRouter.delete('/:id', RequestController.delete)

export default requestRouter