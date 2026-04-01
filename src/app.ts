// selve Express-applikationen
// definerer routes, middleware, logik
// eksporterer app'en

import express, { Request, Response } from 'express'
import authRoutes from './routes/auth.routes'

const app = express()

// middleware

// dette er et globalt middleware som bruges i hele applikationen, derfor giver det mening at have denne i app.ts og ikke auth.middleware.ts
app.use(express.json()) 
app.use('/auth', authRoutes)

// test route
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// app exporteres til server
export default app