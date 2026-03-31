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


const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

export default router