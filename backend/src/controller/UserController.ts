import { Request, Response } from 'express'
import EmailService from '../service/EmailService'

const users = [
    {name: 'Jorge', email: 'mail@mail.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            receipt: users[0],
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo'
            }
        })

        return res.send()
    }
}