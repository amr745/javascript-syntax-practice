// 1. Recreating the abs() Function

// function absolute(n) {
// 	return n > 0 ? n : -n
// }

// console.log(absolute(-1.217197940))
// console.log(absolute(-12.1320))
// console.log(absolute(-544.0))
// console.log(absolute(4666))
// console.log(absolute(-3.14))
// console.log(absolute(250))

//2. Less Than, Greater Than

// function arrBetween(num1, num2, arr) {
// 	return arr.filter(ar => num1 < ar && ar < num2)
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]))
// console.log(arrBetween(7, 32, [1, 2, 3, 78]))

// 3. Four Passengers and a Driver

function carsNeeded(n) {
	return Math.ceil(n / 5)
}

console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))