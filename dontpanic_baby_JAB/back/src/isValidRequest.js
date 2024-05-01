function isObject(arg) {
	if (typeof arg === 'object'
		&& !Array.isArray(arg)
		&& arg !== null)
		return true
	return false
}

function isSameArray(array1, array2) {
	return JSON.stringify(array1) === JSON.stringify(array2)
}

function objectKeysMatchArray(object, array) {
	return isSameArray(Object.keys(object).sort(), array.sort())
}

function isValidRequest(reqBody) {
	const validKeysArray = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6']

	if (!isObject(reqBody))
		return false
	if (!objectKeysMatchArray(reqBody, validKeysArray))
		return false
	return true
}

module.exports = { isObject, isSameArray, objectKeysMatchArray, isValidRequest }
