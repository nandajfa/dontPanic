import isValidKey from '../js/isValidKey.js'

describe('function isValidKey', () => {
	describe('should return false when receiving', () => {
		test.each([
			{ input: 'a' }, { input: 'A' }, { input: '@' },
			{ input: '`' }, { input: '¨' }, { input: 'CapsLock' }
		])("'$input'", ({ input }) => {
			expect(isValidKey(input)).toBe(false)
		})
	})

	describe('should return true when receiving', () => {
		test.each([
			{ input: '0' }, { input: '1' }, { input: '2' }, { input: '3' },
			{ input: '4' }, { input: '5' }, { input: '6' }, { input: '7' },
			{ input: '8' }, { input: '9' }, { input: '+' }, { input: '-' },
			{ input: '*' }, { input: '/' }
		])("'$input'", ({ input }) => {
			expect(isValidKey(input)).toBe(true)
		})
	})
})

