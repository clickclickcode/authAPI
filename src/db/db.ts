// database connection

import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

// singleton pattern

let db: any = null
export async function getDb() {
    // hvis db ikke er null, returnér db
    if (db) return db
    
    // hvis db er null, opret db og derefter returnér db
    db = await open({
        filename: './data/auth.db',
        driver: sqlite3.Database
    })

    // sørg for at users tabel eksisterer
    await db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )
    `)

    return db
}