import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { User } from '../models/User'

export default {
    async get(req: Request, res: Response) {
        try {
            const userService = UserService.getInstance()
            const users: User[] = await userService.find()
            return res
                .status(200)
                .json(
                    users.map(
                        user => (user.toJson())
                    )
                )
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async create(req: Request, res: Response) {
        try {
            const userService = UserService.getInstance()
            const user: User = await userService.create(req.body)
            return res.status(200).json(user)
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async findById(req: Request, res: Response) {
        const userService = UserService.getInstance()
        const user: User = await userService.findById(req.params.id)
        return res.status(200).json(user ? user.toJson() : {})
    },
    async update(req: Request, res: Response) {
        try {
            const userService = UserService.getInstance()
            const user: User = await userService.update(req.params.id, req.body)
            return res.status(200).json(user.toJson())
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async delete(req: Request, res: Response) {
        try {
            const userService = UserService.getInstance()
            const isDeleted = await userService.delete(req.params.id)
            return res.status(200).json(isDeleted)
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    }
}