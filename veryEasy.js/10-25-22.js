//1. Find the Index (Part 1)

// function search(arr, item) {
// 	return arr.indexOf(item)
// }

// console.log(search([1, 2, 3], 4))

//2. Array Indexing

// function valueAt(arr, i) {
// 	return arr[Math.floor(i)]
// }

// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2))

//3. Find Out the Leap Year

// function leapYear(year) {
// 	return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
// }

// console.log(leapYear(2020))

//4. Triangle and Parallelogram Area Finder

// function areaShape(base, height, shape) {
//     return shape === "triangle" ? 0.5 * base * height : base * height
// }

// console.log(areaShape(2, 3, "triangle"))
// console.log(areaShape(8, 6, "parallelogram"))
// console.log(areaShape(2.9, 1.3, "parallelogram"))

// 5. Find the Index (Part #2)

// function search(arr, item) {
// 	return arr.indexOf(item)
// }

// console.log(search([1, 2, 3, 4], 3))
// console.log(search([2, 4, 6, 8, 10], 8))
// console.log(search([1, 3, 5, 7, 9], 11))

//6. Buggy Code (Part 3)

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     } 
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]))
// console.log(sumArray([-1, 0, 1]))
// console.log(sumArray([0, 4, 8, 12]))

//7. Moving House

// function yearsInOneHouse(age, moves) {
// 	return Math.round(age / (moves + 1))
// }

// console.log(yearsInOneHouse(30, 1))
// console.log(yearsInOneHouse(15, 2))
// console.log(yearsInOneHouse(23, 2))