const express = require('express')
const cors = require('cors')
const completeGame = require('./completeGame')
const swaggerUi = require('../../docs/node_modules/swagger-ui-express')

const app = express()

swaggerDocument = require('../../docs/swagger.json');

app.use(express.json())
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

app.post('/', (req, res) => {
	try {
		res.status(200).send(completeGame(req.body))
	}
	catch {
		res.sendStatus(400)
	}
})

app.all('*', (req, res) => {
	res.sendStatus(404)
})

module.exports = app
