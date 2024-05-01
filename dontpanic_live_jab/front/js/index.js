import isValidKey from "./isValidKey.js"
import requestTips from "./requestTips.js"

async function submitToBeEvaluated(event) {
	try {
		event.preventDefault()
		const inputs = document.getElementsByClassName("current")
		const responseBody = await requestTips(inputs)
		if (responseBody) {
			printLastAttempt()
			printValidationText(responseBody.message)
			if (responseBody.message == "Tip") {
				printTips(responseBody.clues)
			}
			else if (responseBody.message == "Win") {
				printTips(responseBody.clues)
			}
			else {
				clearInputs('lastCrypt')
			}
		}
		clearInputs('current')
		inputs[0].focus()
	} catch {
		return null
	}
}
window.submitToBeEvaluated = submitToBeEvaluated

function inputHandler(current, next, event) {
	if (event.key == 'ArrowLeft' && current.previousElementSibling)
		return current.previousElementSibling.focus()
	if (event.key == 'ArrowRight' || event.key == 'Tab')
		return next.focus()
	if (event.key == 'Backspace' || event.key == 'Delete')
		return current.value = ""
	if (!isValidKey(event.key))
		return
	current.value = event.key
	if (current.value.length >= current.maxLength)
		return next.focus()
}

function moveToNext(current, event) {
	event.preventDefault()

	const next = current.nextElementSibling

	if (next)
		inputHandler(current, next, event)
	else
		inputHandler(current, document.getElementById("button"), event)
}
window.moveToNext = moveToNext

function printLastAttempt() {
	let inputs = document.getElementsByClassName("current")
	let outputs = document.getElementsByClassName("last")

	for (let i = 0; i < 6; i++) {
		outputs[i].value = inputs[i].value
	}
}

function printTips(resBody) {
	let outputs = document.getElementsByClassName("lastCrypt")

	outputs[0].value = resBody.field1
	outputs[1].value = resBody.field2
	outputs[2].value = resBody.field3
	outputs[3].value = resBody.field4
	outputs[4].value = resBody.field5
	outputs[5].value = resBody.field6
}

function clearInputs(inputClassName) {
	const inputs = document.getElementsByClassName(inputClassName)

	for (let i = 0; i < 6; i++) {
		inputs[i].value = ''
	}
}

function printValidationText(textType) {
	const p = document.getElementById("validation_text")

	switch (textType) {
		case 'Win':
			p.innerHTML = "<b>Congratulations! You won!!</b>"
			p.style.color = "green"
			break;
		case 'Error':
			p.innerHTML = "<b>Invalid equation</b>"
			p.style.color = "red"
			break;
		default:
			p.innerHTML = ""
			p.style.color = "black"
			break;
	}
}
