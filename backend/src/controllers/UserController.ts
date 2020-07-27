import { Request, Response } from 'express'

const users = [
    {name: 'Jorge', email: 'mail@mail.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async create(req: Request, res: Response) {
        return res.send()
    }
}