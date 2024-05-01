const request = require("supertest")
const app = require('../src/routes')

describe('Test My app server', () => {
	it('should post / route - return Win with tip CCCCCC', async () => {
		const answer = { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }
		const answerCrypt = { message: 'Win', clues: { field1: 'C', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'C' } }

		const res = await request(app).post('/').send(answer)
		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})

describe('Test My app server', () => {
	it('should post / route - return Tip with tip TCCCCT', async () => {
		const answer = { field1: '9', field2: '*', field3: '9', field4: '-', field5: '3', field6: '9' }
		const answerCrypt = { message: 'Tip', clues: { field1: 'T', field2: 'C', field3: 'C', field4: 'C', field5: 'C', field6: 'T' } }

		const res = await request(app).post('/').send(answer)

		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})

describe('Test My app server', () => {
	it('should post / route - return Error', async () => {
		const answer = { field1: '7', field2: '*', field3: '9', field4: '-', field5: '3', field6: '9' }
		const answerCrypt = { message: 'Error', clues: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } }

		const res = await request(app).post('/').send(answer)

		expect(JSON.stringify(res.body)).toBe(JSON.stringify(answerCrypt))
	})
})
