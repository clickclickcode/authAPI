// selve Express-applikationen
// definerer routes, middleware, logik
// eksporterer app'en

import express, { Request, Response } from 'express'
import authRoutes from './routes/auth.routes'
import { authMiddleware } from './middleware/auth.middleware'
import cors from 'cors'

const app = express()

// middleware

app.use(cors({
    origin: 'http://127.0.0.1:5500', // eller 'http://localhost:5500'
    credentials: true // hvis du bruger cookies senere
}))

// dette er et globalt middleware som bruges i hele applikationen, derfor giver det mening at have denne i app.ts og ikke auth.middleware.ts
app.use(express.json()) 
app.use('/auth', authRoutes)

// en protected route som kræver token
app.get('/profile' , authMiddleware, (req, res) => {
    const user = (req as any).user; // payload fra token
    res.json({
        message: `Hello ${user.username}`,
        userId: user.id
    })
})

// test route
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// app exporteres til server
export default app