// function calcAge(age) {
// 	age * 365
// }
// return calcAge(15)

// function and(a, b) {
// 	return a < 10 && b > 1
// }

// console.log(and(5, 10))
// console.log(and(5, 0))
// console.log(and(12, 10))
// console.log(and(12, 0))

function and(a, b) {
    if (a && b === true) {
        return true
    } else {
        return false
    }

}

console.log(and(true, true))
console.log(and(false, true))
console.log(and(true, false))
console.log(and(false, false))