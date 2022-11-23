//1. Fix the Bug: Simple Array Manipulation

// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++) {
//         arr[i]++
//     }
//     return arr
// }

// console.log(incrementItems([-1, -2, -3, -4]))

//2. Stack the Boxes

// function stackBoxes(n) {
// 	return Math.pow(n, 2)
// }

// console.log(stackBoxes(4))

//3. Name Greeting!

// const helloName = name => `Hello ${name}!`.toString()

// console.log(helloName("Tiffany"))

//4. Radians to Degrees

// function radiansToDegrees(rad) {
// 	return rad * 180/Math.PI
// }

// console.log(radiansToDegrees(50))

//5. Concatenating Two Integer Arrays

// let concat = (arr1, arr2) => [...arr1,...arr2]

// console.log(concat([1, 3, 5], [2, 6, 8]))

//6. Fix the Error: Check Whether a Given Number Is Odd

// function isOdd(num) {
// 	return num % 2 !== 0;
// }

// console.log(isOdd(-5))

//7. Find the Index

function findIndex(arr, str) {
	return arr.indexOf(str)
}

console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))