// selve Express-applikationen
// definerer routes, middleware, logik
// eksporterer app'en

import express, { Request, Response } from 'express'
import authRoutes from './routes/auth.routes'

const app = express()

// middleware
app.use(express.json())
app.use('/auth', authRoutes)

// test route
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

export default app