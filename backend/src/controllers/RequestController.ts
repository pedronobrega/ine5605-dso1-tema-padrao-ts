import { Request, Response } from "express";
import RequestService from "../services/RequestService";
import { Request as RequestModel } from '../models/Request'

export default {
    async get(req: Request, res: Response) {
        try {
            const requestService = RequestService.getInstance()
            const requests: RequestModel[] = await requestService.find()
            return res.
                status(200).
                json(
                    requests.map(
                        request => (request.toJson())
                    )
                )
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async create(req: Request, res: Response){
        try {
            const requestService = RequestService.getInstance()
            const request: RequestModel = await requestService.create(req.body)
            return res.status(201).json(request.toJson())
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async findById(req: Request, res: Response){
        const requestService = RequestService.getInstance()
        const request: RequestModel = await requestService.findById(req.params.id)
        return res.status(200).json(request ? request.toJson() : {})
    },
    async update(req: Request, res: Response){
        try {
            const requestService = RequestService.getInstance()
            const request: RequestModel = await requestService.update(req.params.id, req.body)
            return res.status(200).json(request.toJson())
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async delete(req: Request, res: Response){
        const requestService = RequestService.getInstance()
        const isDeleted = await requestService.delete(req.params.id)
        return res.status(200).json(isDeleted)
    }
}