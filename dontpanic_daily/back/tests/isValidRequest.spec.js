const {
	isObject,
	isSameArray,
	objectKeysMatchArray,
	isValidRequest
} = require('../src/isValidRequest')

const mockFunction = jest.fn(() => true)

const solution = {
	field1: "8",
	field2: "*",
	field3: "9",
	field4: "-",
	field5: "3",
	field6: "0"
}

describe('function isObject', () => {
	describe('received an input of the type', () => {
		test(`null and returned ${false}`, () => {
			expect(isObject(null)).toBe(false)
		})
		test(`undefined and returned ${false}`, () => {
			expect(isObject(undefined)).toBe(false)
		})
		test(`string and returned ${false}`, () => {
			expect(isObject("string")).toBe(false)
		})
		test(`array and returned ${false}`, () => {
			expect(isObject(["123456", "456789"])).toBe(false)
		})
		test(`function and returned ${false}`, () => {
			expect(isObject(mockFunction)).toBe(false)
		})
		test(`object and returned ${true}`, () => {
			expect(isObject({ is_object: true })).toBe(true)
		})
	})
})

describe('function isSameArray', () => {
	describe('returned false on receiving the different arrays', () => {
		test.each([
			{ array1: ['1'], array2: ['2'] },
			{ array1: ['1', '2'], array2: ['1', '1'] },
			{ array1: ['1', '2'], array2: ['2', '2'] },
			{ array1: ['1', '2'], array2: [1, 2] }
		])('$array1 and $array2', ({ array1, array2 }) => {
			expect(isSameArray(array1, array2)).toBe(false)
		})
	})

	describe('returned true on receiving the equivalent arrays', () => {
		test.each([
			{ array1: ['1'], array2: ['1'] },
			{ array1: ['1', '2'], array2: ['1', '2'] },
			{ array1: ['2', '1'], array2: ['2', '1'] },
			{ array1: [1, 2], array2: [1, 2] }
		])('$array1 and $array2', ({ array1, array2 }) => {
			expect(isSameArray(array1, array2)).toBe(true)
		})
	})
})

describe('function objectKeysMatchArray', () => {
	const keysArray = ['a', 'b', 'abc']
	test.each([
		{ obj: { foo: 42, bar: [4, 2] }, array: keysArray },
		{ obj: { a: 1, b: 2 }, array: keysArray },
		{ obj: { a: 1, b: 2, abc: 3, d: 4 }, array: keysArray },
		{ obj: { a: 1, b: 2, abcd: 3 }, array: keysArray }
	])('should return false for input $obj and $array', ({ obj, array }) => {
		expect(objectKeysMatchArray(obj, array)).toBe(false)
	})

	test.each([
		{ obj: { foo: 42, bar: [4, 2] }, array: ['foo', 'bar'] },
		{ obj: { a: 1, b: 2 }, array: ['a', 'b'] },
		{ obj: { foo1: 1, foo2: 2, foo3: 3 }, array: ['foo1', 'foo2', 'foo3'] },
		{ obj: { a: 1, b: 2, abc: 3 }, array: ['a', 'b', 'abc'] },
		{ obj: solution, array: Object.keys(solution) }
	])('should return true for input $obj and $array', ({ obj, array }) => {
		expect(objectKeysMatchArray(obj, array)).toBe(true)
	})
})

describe('function isValidRequest', () => {
	describe('received an input of the type', () => {

		test(`null and returned ${false}`, () => {
			expect(isValidRequest(null)).toBe(false)
		})
		test(`undefined and returned ${false}`, () => {
			expect(isValidRequest(undefined)).toBe(false)
		})
		test(`string and returned ${false}`, () => {
			expect(isValidRequest("string")).toBe(false)
		})
		test(`array and returned ${false}`, () => {
			expect(isValidRequest(["123456", "456789"])).toBe(false)
		})
	})

	describe('returned false on receiving the invalid object', () => {
		test.each([
			{ reqBody: { name: "foo" } },
			{ reqBody: { foo: 42, bar: [4, 2] } },
			{ reqBody: { field1: "1", field2: "2" } },
			{ reqBody: { field1: "1", field2: "2", field3: "3", field4: "4", field5: "5" } },
			{ reqBody: { ...solution, field7: "0" } }
		])('$reqBody', ({ reqBody }) => {
			expect(isValidRequest(reqBody)).toBe(false)
		})
	})

	describe('returned true on receiving the valid object', () => {
		test.each([
			{ reqBody: solution },
			{ reqBody: { ...solution, field1: "foo" } },
			{ reqBody: { ...solution, field1: "foo", field2: "bar" } },
			{ reqBody: { ...solution, field1: 1, field2: 42 } },
			{ reqBody: { ...solution, field1: { foo: "bar" } } },
			{ reqBody: { ...solution, field1: ["foo", "bar"] } }
		])('$reqBody', ({ reqBody }) => {
			expect(isValidRequest(reqBody)).toBe(true)
		})
	})

})
