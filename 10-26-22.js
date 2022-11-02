//1. Word Numbers!

// function word(s) {
// 	let string = {
//         "one" : 1,
//         "two" : 2,
//         "three" : 3,
//         "four" : 4,
//         "five" : 5,
//         "six" : 6,
//         "seven" : 7,
//         "eight" : 8,
//         "nine" : 9,
//         "zero" : 0
//     }

//     return string[s]
// }

// console.log(word("one"))
// console.log(word("two"))
// console.log(word("nine"))

//2. Many Operators!

function operate(num1, num2, operator) {
	return eval(num1 + operator + num2)
}

console.log(operate(1, 2, "+"))
console.log(operate(7, 10, "-"))
console.log(operate(20, 10, "%"))