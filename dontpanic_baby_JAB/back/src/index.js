const app = require('./routes')

const port = 3000

app.listen(port, () => {
	console.log(`Server running at port ${port}`)
})
