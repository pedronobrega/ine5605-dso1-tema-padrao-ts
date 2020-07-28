import { Router } from 'express'
import carRouter from './car.routes'
import keyRouter from './key.routes'
import requestRouter from './request.routes'
import userRouter from './user.routes'

const routes = Router()

routes.use('/cars', carRouter)
routes.use('/keys', keyRouter)
routes.use('/requests', requestRouter)
routes.use('/users', userRouter)

export default routes