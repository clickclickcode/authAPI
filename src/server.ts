// starter server på en port
// importerer app fra app.ts
// kalder app.listen(PORT)

import app from './app'

// vi finder vores port i vores .env fil
const PORT = process.env.PORT || 3000

// vi lytter på vores port fra .env filen -> PORT 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})