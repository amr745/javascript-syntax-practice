// function calcAge(age) {
// 	age * 365
// }
// return calcAge(15)



// function and(a, b) {
//     if (a && b === true) {
//         return true
//     } else {
//         return false
//     }

// }

// console.log(and(true, true))
// console.log(and(false, true))
// console.log(and(true, false))
// console.log(and(false, false))


//The Farm Problem

// function animals(chickens, cows, pigs) {
// 	return (chickens * 2) + (cows * 4) + (pigs * 4)
// }

// console.log(animals(2, 3, 5))
// console.log(animals(1, 2, 3))
// console.log(animals(5, 2, 8))

// Are the Numbers Equal?

// function isSameNum(num1, num2) {
// 	if(num1 === num2) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isSameNum(1, 1))

// Return the First Element in an Array

// function getFirstValue(arr) {
// 	return arr[0]
// }

// console.log(getFirstValue([1, 2, 3]))

// Convert Hours and Minutes into Seconds

function convert(hours, minutes) {
	return (hours * 3600) + (minutes * 60)
}

console.log(convert(1, 3))