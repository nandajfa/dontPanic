const isValidInput = require('../src/isValidInput')

describe('Test function isValidInput', () => {
	it('play (+, 3, 2, +, 1, 0) return True', () => {
		expect(isValidInput({ field1: '+', field2: '3', field3: '2', field4: '+', field5: '1', field6: '0' })).toBe(true);
	})
	it('play (+, 3, 2, +, 1) return False', () => {
		expect(isValidInput({ field1: '+', field2: '3', field3: '2', field4: '+', field5: '1' })).toBe(false);
	})
	it('play (3, 0, +, 1, +, 11) return False', () => {
		expect(isValidInput({ field1: '3', field2: '0', field3: '+', field4: '1', field5: '+', field6: '11' })).toBe(false);
	})
})
