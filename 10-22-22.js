//1. I'd Like a New Shade of Blue, Please

// function howManyWalls(n, w, h) {
//     return Math.floor(n / (w * h))
// }

// console.log(howManyWalls(10, 15, 12))

//2. Century Crisis

// function futurePeople(population, n) {
// 	return population + 360 * n
// }

// console.log(futurePeople(5240, 3))

//3. Evaluate an Equation

// function eq(evaluate) {
// 	return eval(evaluate)
// }

// console.log(eq("1+2"))

//3. Using Ternary Operators

// function yeah_nope(bool) {
// 	return bool ? "yeah" : "nope"
// }

// console.log(yeah_nope(false))

//4. Is the String Odd or Even?

function oddOrEven(s) {
	return s.length % 2 === 0 ? true : false 
}

console.log(oddOrEven("pears"))