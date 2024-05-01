const Sequelize = require('sequelize');

const sequelize = new Sequelize({
	database: 'postgres',
	username: 'postgres',
	password: 'postgres',
	dialect: 'postgres',
	host: 'db',
	port: 5432
})

const equation = sequelize.define(
	"equations",
	{
		equation: Sequelize.STRING,
	},
	{
		timestamp: false
	}
)

async function getEquation() {
	try {
	const date = new Date()
	const dbResponse = await equation.findByPk(date.getDay() + 1, {
		attributes: ["equation"]
	})
	const parsedResponse = JSON.parse(JSON.stringify(dbResponse))
	return {
		field1: parsedResponse.equation[0],
		field2: parsedResponse.equation[1],
		field3: parsedResponse.equation[2],
		field4: parsedResponse.equation[3],
		field5: parsedResponse.equation[4],
		field6: parsedResponse.equation[5]
	}
	} catch {
		return null
	}
}

module.exports = getEquation;
