export default async function requestTips(inputs) {
	try {
		const response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify({
				field1: inputs[0].value,
				field2: inputs[1].value,
				field3: inputs[2].value,
				field4: inputs[3].value,
				field5: inputs[4].value,
				field6: inputs[5].value
			})
		})
		if (response.status === 200)
			return response.json()
		else
			throw null
	}
	catch {
		return null
	}
}
