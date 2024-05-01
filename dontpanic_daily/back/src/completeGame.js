const returnGameTip = require('./returnGameTip')
const isValidInput = require('./isValidInput')
const isValidFunc42 = require('./isValidFunc42')
const { isValidRequest } = require('./isValidRequest')
const getEquation = require('./dbConnection')

async function completeGame(reqBody) {
	try {
		const errorReturn = { message: 'Error', clues: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } }

		if (!isValidRequest(reqBody))
			return errorReturn
		if (!isValidInput(reqBody))
			return errorReturn
		if (!isValidFunc42(reqBody))
			return errorReturn


		const currentAnswer = await getEquation()
		const gameTip = returnGameTip(reqBody, currentAnswer)
		const gameCompare = { field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' }
		if (JSON.stringify(gameTip) === JSON.stringify(gameCompare))
			return ({ message: 'Win', clues: gameTip })
		else
			return ({ message: 'Tip', clues: gameTip })
	}
	catch (error) {
		return errorReturn
	}
}

module.exports = completeGame;
