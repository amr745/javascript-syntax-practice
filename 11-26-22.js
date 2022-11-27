// 1. Is the Last Character an "N"?

// function isLastCharacterN(word) {
// 	return word.endsWith('n')
// }

// console.log(isLastCharacterN("Aiden"))
// console.log(isLastCharacterN("Piet"))
// console.log(isLastCharacterN("Bert"))
// console.log(isLastCharacterN("Dean"))

// 2. First Class, Second Class and Third Class Levers

// function determineLever(arr) {
// 	return arr[1] === "f" ? "first class lever" : arr[2] === "f" ? "second class lever" : "third class lever"
// }

// console.log(determineLever(["e", "f", "l"]))
// console.log(determineLever(["e", "l", "f"]))
// console.log(determineLever(["f", "e", "l"]))

// 3. Luke, I Am Your ...

function relationToLuke(name) {
	let relationship = {
        "Darth Vader" : "father",
        "Leia" : "sister",
        "Han" : "brother in law",
        "R2D2" : "droid"
        } 
    return "Luke, I am your " + relationship[name] + "."
}

console.log(relationToLuke("Darth Vader"))
console.log(relationToLuke("Leia"))
console.log(relationToLuke("Han"))