import { Router } from 'express'
import carRouter from './car.routes'

const routes = Router()

routes.use('/cars', carRouter)

export default routes