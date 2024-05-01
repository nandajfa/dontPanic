const app = require('./routes')

const port = 8082

app.listen(port, () => {
	console.log(`Server running at port ${port}`)
})
