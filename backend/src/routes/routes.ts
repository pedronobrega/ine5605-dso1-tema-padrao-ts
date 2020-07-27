import { Router } from 'express'
import carRouter from './car.routes'
import keyRouter from './key.routes'

const routes = Router()

routes.use('/cars', carRouter)
routes.use('/keys', keyRouter)

export default routes