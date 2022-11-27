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
//   return arr.map(String)
// }

// console.log(parseArray([1, 2, "a", "b"]))
// console.log(parseArray(["abc", 123, "def", 456]))
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))
// console.log(parseArray([]))

// 5. Repeating Letters

// function doubleChar(str) {
//   let arr = []
// 	for (i=0; i < str.length; i++) {
//     let two = str[i] + str[i]
//     arr.push(two)
//   }
//   return  arr.toString().replace(/,/g, '')
// }

// console.log(doubleChar("String"))
// console.log(doubleChar("Hello World!"))
// console.log(doubleChar("1234!_ "))

// 6. Extract City Facts

// function cityFacts(city) {
// 	return city.name + " has a population of " + city.population + " and is situated in " + city.continent
// }

// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }))
// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }))

// 7. Return the Total Number of Parameters

function numberArgs(...total) {
  x = 0
  y = 0
  return total.length
}

console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
console.log(numberArgs(x, y))
console.log(numberArgs())