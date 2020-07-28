import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router()

userRouter.get('/', UserController.get)
userRouter.post('/', UserController.create)
userRouter.get('/:id', UserController.findById)
userRouter.put('/:id', UserController.update)
userRouter.delete('/:id', UserController.delete)

export default userRouter