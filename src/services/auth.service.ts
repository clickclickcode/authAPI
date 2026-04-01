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

import { getDb } from '../db/db' // vores forbindelse til vores sqlite db
import { hashPassword, comparedPassword } from '../utils/hash' // vores hjælperfunktioner
import { generateToken } from '../utils/jwt'

// hvorfor er det at vi næsten udelukkende arbejder med async/await/promises, fordi at det er på serveren/API'en?
export async function registerUser(username: string, password: string) {
    // vi opretter vores forbindelse til databasen
    const db = await getDb()

    // vi kalder vores hjælperfunktion der hash'er vores password
    const hashedPassword = await hashPassword(password)

    // tilføj en bruger til databasen?
    await db.run(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        username,
        hashedPassword
    )

    return { success: true }
}

export async function loginUser(username: string, password: string) {
    const db = await getDb()
    const user = await db.get(
        'SELECT * FROM users WHERE username = ?',
         username
    )

    // hvis brugeren ikke (kan) findes i db eller hvis password ikke matcher brugerens password -> throw error
    if (!user || !(await comparedPassword(password, user.password))) {
        throw new Error('Invalid credentials')
    }

    // generer token
    const token = generateToken({ id: user.id, username: user.username })

    // findes brugeren og er password korrekt -> returner success-melding og user ID
    // vi får ID, bruger vi så ID'et (som må være unikt) som en reference til brugerobjektet og kan dermed requeste resten af brugerens data?
    return { success: true, userId: user.id, token }
}