const completeGame = require('../src/completeGame')

describe('Test function completeGame', () => {
	const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
	const answerCrypt = { message: 'Win', clues: { field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' } }

	it('play (8, *, 9, -, 3, 0) - return Win with tip CCCCCC', () => {
		expect(JSON.stringify(completeGame(answer))).toBe(JSON.stringify(answerCrypt))
	})
})

describe('Test function completeGame', () => {
	const answer = { field1: '9', field2: '*', field3: '9', field4: '-', field5: '3', field6: '9' }
	const answerCrypt = { message: 'Tip', clues: { field1: 'T', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'T' } }

	it('play (9, *, 9, -, 3, 9) - return Tip with tip TCCCCT', () => {
		expect(JSON.stringify(completeGame(answer))).toBe(JSON.stringify(answerCrypt))
	})
})
