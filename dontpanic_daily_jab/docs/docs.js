const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

const docsApp = express()

docsApp.use('/docs', swaggerUi.serve)
docsApp.get('/docs', swaggerUi.setup(swaggerDocument))

docsApp.all('*', (req, res) => {
	res.redirect('localhost:8085/docs')
})

const port = 8085

docsApp.listen(port, () => {
	console.log(`Server running at port ${port}`)
})
