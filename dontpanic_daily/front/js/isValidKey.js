export default function isValidKey(key) {
	const validKey = /^[0-9*\/+-]$/
	return validKey.test(key)
}
