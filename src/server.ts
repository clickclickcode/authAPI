// starter server på en port
// importerer app fra app.ts
// kalder app.listen(PORT)

import app from './app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})