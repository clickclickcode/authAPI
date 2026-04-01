// modtager requests (req/res)
// kalder service
// returnere response
// "HTTP layer"

import { Request, Response } from 'express'
import { registerUser, loginUser } from '../services/auth.service'

// er authController et objekt bestående af to promise requests som når de resolver returnerer to objekter i authController objektet?
export const authController = {
    async register(req: Request, res: Response) {
        const { username, password } = req.body

        try {
            const result = await registerUser(username, password)
            res.status(201).json(result)
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },

    async login(req: Request, res: Response) {
        const { username, password } = req.body

        try {
            const { username, password } = req.body
            const result = await loginUser(username, password)
            res.status(201).json(result)
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }
}