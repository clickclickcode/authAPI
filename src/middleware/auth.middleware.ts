// Kører før request når controller, f.eks.
// tjek JWT

import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: 'No token provided' });

    const parts = authHeader.split(' ')
    if (parts.length !== 2) return res.status(401).json({ error: 'Token error' });

    const token = parts[1];
    if (!token) return res.status(401).json({ error: 'Token missing' });
    
    const payload = verifyToken(token);
    if (!payload) return res.status(401).json({ error: 'Invalid token' });

    (req as any).user = payload; // gem payload på request

    next();
}