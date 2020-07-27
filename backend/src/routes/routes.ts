import { Router } from 'express'
import carRouter from './car.routes'
import keyRouter from './key.routes'
import requestRouter from './request.routes'

const routes = Router()

routes.use('/cars', carRouter)
routes.use('/keys', keyRouter)
routes.use('/requests', requestRouter)
// routes.use('/users')

export default routes