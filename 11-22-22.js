// Valid Zip Code

function isValid(zip) {
	return /^\d+$/.test(zip) && zip.length === 5
}

console.log(isValid("59001"))
console.log(isValid("853a7"))
console.log(isValid("732 32"))
console.log(isValid("393939"))