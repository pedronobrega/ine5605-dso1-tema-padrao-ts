import { Request, Response } from "express";
import KeyService from "../services/KeyService";
import { Key } from "../models/Key";

export default {
    async get(req: Request, res: Response) {
        try {
            const keyService = KeyService.getInstance()
            const keys: Key[] = await keyService.find()
            return res
            .status(200)
            .json(
                keys.map(
                    key => (key.toJson())
                )
            )
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async create(req: Request, res: Response) {
        try {
            const keyService = KeyService.getInstance()
            const key: Key = await keyService.create(req.body)
            return res.status(201).json(key) 
        } catch (error) {
            console.log('error message >> ', error.message)
            return res.status(400).end()
        }
    },
    async findById(req: Request, res: Response) {
        const keyService = KeyService.getInstance()
        const key: Key = await keyService.findById(req.params.id)
        return res.status(200).json(key ? key.toJson() : {})
    },
    async update(req: Request, res: Response) {
        const keyService = KeyService.getInstance()
        const key: Key = await keyService.update(req.params.id, req.body)
        return res.status(200).json(key ? key.toJson() : {})
    },
    async delete(req: Request, res: Response) {
        const keyService = KeyService.getInstance()
        const isDeleted = await keyService.delete(req.params.id)
        return res.status(200).json(isDeleted)
    }
}