const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

app.post('/jab', async (req, res) => {
    try {
        res.status(200).send(await completeGame(req.body))
    }
    catch {
        res.sendStatus(400)
    }
})

app.all('*', (req, res) => {
	res.sendStatus(404)
})

module.exports = app

