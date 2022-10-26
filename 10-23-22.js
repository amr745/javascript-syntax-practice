//1. Leap Year Function

// function leapYear(year) {
//     for (i = 0; i <= year; i++) {
//         return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0
//     }
// }
// console.log(leapYear(2000))

//2. Word without First Character

// function newWord(str) {
// 	return str.slice(1)
// }

// console.log(newWord("plum"))

//3. Inches to Feet

// function inchesToFeet(inches) {
// 	return Math.floor(inches / 12)
// }

// console.log(inchesToFeet(0.5))

//4. Flip the Boolean

// function flipBool(b) {
//     return b ? 0 : 1
// }

// console.log(flipBool(0))

//5. To the Power of _____

// function calculateExponent(num, exp) {
// 	return Math.pow(num, exp)
// }

// console.log(calculateExponent(3, 3))

//6. String and Number Conversions

// function intToString(num) {
// 	// return num.toString()
//     // return `${num}`
//     return String(num)
// }


// function stringToInt(num) {
// 	// return parseInt(num)
//     return Number(num)
// }

// console.log(intToString(4))

//7. String and Number Conversions

function intToString(num) {
    return String(num)
}

function stringToInt(num) {
    return Number(num)
}

console.log(intToString(4))