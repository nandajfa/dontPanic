import requestTips from "../js/requestTips"

const solutionInput = [
	{ value: '8' }, { value: '*' }, { value: '9' },
	{ value: '-' }, { value: '3' }, { value: '0' },
]

describe('Integration test', () => {
	test('function requestTips can connect to backend API', async () => {
		expect.assertions(1)
		const responseBody = await requestTips(solutionInput)
		expect(responseBody).not.toBeNull()
	})
})
