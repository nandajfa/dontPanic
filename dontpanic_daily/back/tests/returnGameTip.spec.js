const returnGameTip = require('../src/returnGameTip')

const correctAnswer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
describe('Test function returnGameTip', () => {
    const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
    const answerCrypt = { field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' }

    it('play (8, *, 9, -, 3, 0) return (C, C, C, C, C, C)', () => {
        expect(JSON.stringify(returnGameTip(answer, correctAnswer))).toBe(JSON.stringify(answerCrypt))
    })
})

describe('Test function returnGameTip', () => {
    const answer = { field1: '9', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
    const answerCrypt = { field1: 'T', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' }

    it('play (9, *, 9, -, 3, 0) return (T, C, C, C, C, C)', () => {
        expect(JSON.stringify(returnGameTip(answer, correctAnswer))).toBe(JSON.stringify(answerCrypt))
    })
})

describe('Test function returnGameTip', () => {
    const answer = { field1: '1', field2: '9', field3: '9', field4: '-', field5: '3', field6: '0' }
    const answerCrypt = { field1: 'X', field2: 'T', field3: 'C', field4: 'C', field5: 'C', field6: 'C' }

    it('play (1, 9, 9, -, 3, 0) return (X, T, C, C, C, C)', () => {
        expect(JSON.stringify(returnGameTip(answer, correctAnswer))).toBe(JSON.stringify(answerCrypt))
    })
})
