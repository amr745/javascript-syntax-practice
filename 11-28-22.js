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

// function isEvenOrOdd(num) {
// 	return num % 2 === 0 ? "even" : "odd"
// }

// console.log(isEvenOrOdd(3))
// console.log(isEvenOrOdd(146))
// console.log(isEvenOrOdd(19))

// 5. Calculate the Mean

// function mean(arr) {
// 	let total = 0

//     for (ar of arr) {
//         total += ar
//     }

//     return Number((total / arr.length).toFixed(2))
// }

// console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]))
// console.log(mean([2, 3, 2, 3]))
// console.log(mean([3, 3, 3, 3, 3]))

// 6. Find the Smallest and Biggest Numbers

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]
// }

// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([1]))

// 7. Find the Bug: Returning the Container

function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
            break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
            break
		default:
			container = null
	}

	return container
}

console.log(getContainer("Bread"))
console.log(getContainer("Beer"))
console.log(getContainer("Candy"))
console.log(getContainer("Cheese"))