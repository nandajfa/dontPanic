# Politics

- Names - camelCase
- 1 character per input
- 6 inputs
- Correct equation: `8 * 9 - 30`

```js
request.body = {
	field1: "1",
	field2: "2",
	field3: "+",
	field4: "3",
	field5: "/",
	field6: "5"
}

response.body = {
	message: "Tip",
	clues: {
		field1: "T",
		field2: "X",
		field3: "C",
		field4: "T",
		field5: "X",
		field6: "C"
	}
}
```
