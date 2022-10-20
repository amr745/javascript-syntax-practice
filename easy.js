//Sum of Multiplication

//loop through ten=10
//add num to each number ten=10
//multiply each ten=10

function multiSum(num, ten=10) {
    let sum = 0
	for (let i = 0; i < ten; i++) {
        sum += parseInt(num * i + num)
    }   
    return sum
}

console.log(multiSum(2))

// // Return Negative

// function returnNegative(n) {
// 	return Math.min(n,-n)
// }


// console.log(returnNegative(-4))

// Bitwise Operations

// function bitwiseAND(n1, n2) {
// 	return n1 & n2
// }

// function bitwiseOR(n1, n2) {
// 	return n1 | n2
// }

// function bitwiseXOR(n1, n2) {
// 	return n1 ^ n2
// }

// console.log(bitwiseXOR(7, 12))


// Add up the Numbers from a Single Number

// function addUp(num) {
//     var res = (num * (num + 1)) / 2;
//     return res
// }

// console.log(addUp(600))

// Return a String as an Integer

// function stringInt(str) {
// 	return parseInt(str)
// }

// console.log(stringInt("6"))

//Sort an Array by String Length

// function sortByLength(arr) {
// 	return arr.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(["Google", "Apple", "Microsoft"]))