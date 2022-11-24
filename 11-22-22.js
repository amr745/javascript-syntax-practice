// 1. Valid Zip Code

// function isValid(zip) {
// 	return /^\d+$/.test(zip) && zip.length === 5
// }

// console.log(isValid("59001"))
// console.log(isValid("853a7"))
// console.log(isValid("732 32"))
// console.log(isValid("393939"))

// 2. Minimal II: Boolean Redundancy

function parity(n) {
	return n % 2 === 0 ? "even" : "odd"
}

console.log(parity(16))