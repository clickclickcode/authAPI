// helper til password hashing

import bcrypt from 'bcrypt'

// denne funktion hasher en string
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

// denne funktion sammenligner et password med en hashed string - bcrypt.compare() dekrypterer en krypteret string?
export async function comparedPassword(
    password: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(password, hash)
}