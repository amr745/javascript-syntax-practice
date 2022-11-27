// 1. Is the Last Character an "N"?

// function isLastCharacterN(word) {
// 	return word.endsWith('n')
// }

// console.log(isLastCharacterN("Aiden"))
// console.log(isLastCharacterN("Piet"))
// console.log(isLastCharacterN("Bert"))
// console.log(isLastCharacterN("Dean"))

// 2. First Class, Second Class and Third Class Levers

function determineLever(arr) {
	return arr[1] === "f" ? "first class lever" : arr[2] === "f" ? "second class lever" : "third class lever"
}

console.log(determineLever(["e", "f", "l"]))
console.log(determineLever(["e", "l", "f"]))
console.log(determineLever(["f", "e", "l"]))