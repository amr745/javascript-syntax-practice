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

function flipBool(b) {
	// return b === true || b === 1 ? 0 : 1
    return b ? 0 : 1
}

console.log(flipBool(0))