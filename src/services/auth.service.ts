// Her findes logikken
// opret bruger
// tjek password
// generér token
// "hjernen"
// business / service layer
// formål:
// håndtere alt logik, der ikke har noget med Express at gøre
// interagere med databasen via getDb()
// Eksempel: oprette brugere, hente brugere, tjekke passwords, hash passwords

import { getDb } from '../db/db'
import { hashPassword, comparedPassword } from '../utils/hash'

export async function registerUser(username: string, password: string) {
    const db = await getDb()

    const hashedPassword = await hashPassword(password)

    await db.run(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        username,
        hashedPassword
    )

    return { success: true }
}

export async function loginUser(username: string, password: string) {
    const db = await getDb()
    const user = await db.get('SELECT * FROM users WHERE username = ?', username)

    if (!user || !(await comparedPassword(password, user.password))) {
        throw new Error('Invalid credentials')
    }
    return { success: true, userId: user.id }
}