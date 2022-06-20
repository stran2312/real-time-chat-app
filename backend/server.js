const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.send('This is from backend')
})

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`)
})