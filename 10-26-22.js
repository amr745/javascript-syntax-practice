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

// function operate(num1, num2, operator) {
// 	return eval(num1 + operator + num2)
// }

// console.log(operate(1, 2, "+"))
// console.log(operate(7, 10, "-"))
// console.log(operate(20, 10, "%"))

//3. Check if an Array Contains a Given Number

// function check(arr, el) {
// 	return arr.includes(el)
// }

// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))

//4. Return Types

// function arrayValuesTypes(arr) {
//     Array = []
//     for (let i = 0; i < arr.length; i++) {
//         Array.push(typeof arr[i])
//     }
//     return Array
// }

// console.log(arrayValuesTypes([1, 2, "null", []]))
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))

//5. Additive Inverse

// function additiveInverse(arr) {
// 	neg = []
//     for (let i = 0; i < arr.length; i++) {
//         neg.push(-arr[i])
//     }
//     return neg
// }

// console.log(additiveInverse([5, -7, 8, 3]))
// console.log(additiveInverse([1, 1, 1, 1, 1]))
// console.log(additiveInverse([-5, -25, 35]))

//6. Circle or Square

// function circle_or_square(rad, area){
//     return 2 * Math.PI * rad > Math.sqrt(area) * 4
// }

// console.log(circle_or_square(16, 625))
// console.log(circle_or_square(5, 100))
// console.log(circle_or_square(8, 144))

//7. Front 3 - Slice Check Repeat Concatenate

function frontThree(str) {
    return (str.slice(0, 3)).repeat(3)
}

console.log(frontThree("Python"))
console.log(frontThree("Cucumber"))
console.log(frontThree("bioshock"))