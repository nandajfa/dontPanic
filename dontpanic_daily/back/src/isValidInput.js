function isValidInput(reqBody) {
	try {
		for (let i = 0; i < Object.values(reqBody).length; i++) {
			if (Object.values(reqBody)[i].length != 1)
				return false
		}
		if (Object.keys(reqBody).length != 6)
			return false
		return true
	}
	catch (error) {
		return false
	}
}

module.exports = isValidInput;
