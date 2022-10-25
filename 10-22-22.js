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

// function oddOrEven(s) {
// 	return s.length % 2 === 0
// }

// console.log(oddOrEven("pears"))

//5. Return the Last Element in an Array

// function getLastItem(arr) {
// 	return arr[arr.length - 1]
// }

// console.log(getLastItem([1, 2, 3, 1, 4, 5, 6, 1]))

// 6. On/Off Switches

// function posCom(num) {
//        return Math.pow(2, num)
//     }

// console.log(posCom(10))

//7. Buggy Code

function has_bugs(buggy_code) {
	return buggy_code ? "sad days" : "it's a good day"
}

console.log(has_bugs(false))