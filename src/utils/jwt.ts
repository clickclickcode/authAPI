// helper til JWT

import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'verysecret'

export function generateToken(payload: object, expiresIn: string = '1h'): string {
    return jwt.sign(payload as JwtPayload, SECRET_KEY, { expiresIn } as SignOptions)
}

export function verifyToken(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, SECRET_KEY) as JwtPayload;
    } catch (err: any) {
        return null;
    }
}