// export default async function requestTips(inputs) {
// 	try {
// 		const response = await fetch(
// 			`http://localhost:3000/
// 				${inputs[0].value}/${inputs[1].value}/
// 				${inputs[2].value}/${inputs[3].value}/
// 				${inputs[4].value}/${inputs[5].value}/
// 			`
// 		)
// 		if (response.status === 200)
// 			return response.json()
// 		else
// 			throw null
// 	}
// 	catch {
// 		return null
// 	}
// }

export default async function requestTips(inputs) {
    try {
        const response = await fetch('http://labs-mills-nps.42sp.org.br:5012/jab', {
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
