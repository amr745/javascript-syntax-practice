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

function radiansToDegrees(rad) {
	return rad * 180/Math.PI
}

console.log(radiansToDegrees(50))