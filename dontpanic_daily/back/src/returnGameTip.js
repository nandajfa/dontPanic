function returnGameTip(reqBody, answer) {
	try {
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
	catch {
		return false
	}
}

module.exports = returnGameTip;
