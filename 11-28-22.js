// 1. The Fifth Argument

// function fifth() {
//   return arguments[4] === undefined ? "Not enough arguments" : typeof arguments[4]
// }



// console.log(fifth(1, 2, 3, 4, 5))
// console.log(fifth("a", 2, 3, true, "five"))
// console.log(fifth())

// 2. Amazing Edabit!

// function amazingEdabit(str) {
// 	return str.includes("edabit") ? str : str.replace("amazing", "not amazing")
// }

// console.log(amazingEdabit("edabit is amazing."))
// console.log(amazingEdabit("Mubashir is amazing."))
// console.log(amazingEdabit("Infinity is amazing."))

// 3. Slice of Pie

// function equalSlices(total, people, each) {
// 	return people * each <= total
// }

// console.log(equalSlices(11, 5, 2))
// console.log(equalSlices(11, 5, 3))
// console.log(equalSlices(8, 3, 2))
// console.log(equalSlices(8, 3, 3))
// console.log(equalSlices(24, 12, 2))

// 4. Is the Number Even or Odd?

function isEvenOrOdd(num) {
	return num % 2 === 0 ? "even" : "odd"
}

console.log(isEvenOrOdd(3))
console.log(isEvenOrOdd(146))
console.log(isEvenOrOdd(19))