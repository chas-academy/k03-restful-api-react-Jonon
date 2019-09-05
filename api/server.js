const express = require('express')
const app = express()

const PORT = 3003
app.listen(`${PORT}`, () => {
    console.log(`server is up and listening on port ${PORT}`)
} )