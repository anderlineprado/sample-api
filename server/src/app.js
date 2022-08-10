import express from 'express'
import database from './data/database.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.get('/', (req, res) => {
    res.send("Sup")
})

export default app
