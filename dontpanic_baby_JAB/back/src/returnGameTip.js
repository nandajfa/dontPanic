function returnGameTip(reqBody) {
	try {
		const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
		const answerCrypt = {}
		for (let i = 0; i < Object.values(reqBody).length; i++) {
			if (Object.values(reqBody)[i] != Object.values(answer)[i])
				answerCrypt[Object.keys(reqBody)[i]] = 'X'
			for (let j = 0; j < Object.values(reqBody).length; j++)
				if (Object.values(reqBody)[i] == Object.values(answer)[j])
					answerCrypt[Object.keys(reqBody)[i]] = 'T'
			if (Object.values(reqBody)[i] == Object.values(answer)[i])
				answerCrypt[Object.keys(reqBody)[i]] = 'C'
		}
		return (answerCrypt)
	}
	catch (error) {
		return false
	}
}

module.exports = returnGameTip;
