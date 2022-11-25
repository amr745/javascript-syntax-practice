// 1. Valid Zip Code

// function isValid(zip) {
// 	return /^\d+$/.test(zip) && zip.length === 5
// }

// console.log(isValid("59001"))
// console.log(isValid("853a7"))
// console.log(isValid("732 32"))
// console.log(isValid("393939"))

// 2. Minimal II: Boolean Redundancy

// function parity(n) {
// 	return n % 2 === 0 ? "even" : "odd"
// }

// console.log(parity(16))

// 3. Nth Star Number

// function starNumber(n) {
// 	return 6 * n * (n-1) + 1
// }

// console.log(starNumber(2))
// console.log(starNumber(3))
// console.log(starNumber(5))

// 4. Convert All Array Items to String

// function parseArray(arr) {
//   let the = []
// 	for (let i = 0; i < arr.length; i++) {
//     the.push(arr[i].toString())
//   }
//   return the
// }

function parseArray(arr) {
  return arr.map(String)
}

console.log(parseArray([1, 2, "a", "b"]))
console.log(parseArray(["abc", 123, "def", 456]))
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))
console.log(parseArray([]))