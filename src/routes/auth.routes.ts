// Definerer endpoints
// /register
// /login
// binder controller til URL
// håndterer HTTP / Router layer
// Formål:
// modtage requests fra klienten (browsser, Postman, frontend-app, etc)
// validere inputs på et simpelt niveau (fx. tjek om username og password findes)
// kald til "service" for at udføre logikken
// returnere response (JSON, status codes, osv)

import { Router } from 'express'
import { authController } from '../controllers/auth.controller'

// initialiserer en Router som eksporteres til app.ts (som authRoutes)
const router = Router()

// er router et objekt der påtager sig de nedenstående .post requests, og eksporterer vi på den måde de to requests til app.ts??
// eller er dette bare en definition af vores endpoints?
router.post('/register', authController.register)
router.post('/login', authController.login)

export default router