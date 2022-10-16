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

// function convert(hours, minutes) {
// 	return (hours * 3600) + (minutes * 60)
// }

// console.log(convert(1, 3))

// Equality Check

// function checkEquality(a, b) {
//   if ( a === b) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(checkEquality(1, 1))

// Sum of Polygon Angles

// function sumPolygon(n) {
// 	return  (n - 2) * 180
// }

// console.log(sumPolygon(6))

// Profitable Gamble

// function profitableGamble(prob, prize, pay) {
//     if (prob * prize > pay) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(profitableGamble(0.9, 1, 2))

// Fix the Expression

// function isSeven(x) {
// 	return x=="7"?true:false;
// }

// console.log(isSeven(7))

// Convert Hours into Seconds

// function howManySeconds(hours) {
// 	return hours * 3600
// }

// console.log(howManySeconds(24))

// Buggy Code (Part 4)

// function greeting(name) {
//     if(name == "Mubashir") {
//       return "Hello, my Love!";
//     } else {
//         return "Hello, " + name + "!";
//     }
//   }

//   console.log(greeting("Matt"))

// Using Arrow Functions

// arrowFunc = (x) => {
//     return x
// }

// console.log(arrowFunc(true))

// Let's Fuel Up!

// function calculateFuel(n) {
//     const fuel = n * 10
//     if (fuel > 100) {
//         return fuel
//     } else {
//         return 100
//     }
// }
// console.log(calculateFuel(15))

// Football Points

// function footballPoints(wins, draws, losses) {
//     return (wins * 3) + (draws * 1) + (losses * 0)
// }

// console.log(footballPoints(0, 0, 1))

//Boolean to String Conversion

// function boolToString(flag) {
// 	return flag.toString()
// }

// console.log(boolToString(9*9))

// Miserable Parody of a Calculator

// function calculator(str) {
// 	return eval(str)
// }

// console.log(calculator("13+2-5*2"))

//Two Makes Ten

// function makesTen(a, b) {
// 	if (a === 10 || b === 10 || a + b === 10) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(makesTen(1, 9))

// function makesTen(a, b) {
//     arr = [a, b, a + b ]
// 	return arr.includes(10)
// }

// console.log(makesTen(9, 9))

// function makesTen(a, b) {
//     return a === 10 || b === 10 || a + b === 10
// }

// console.log(makesTen(9, 10))

//Buggy Code (Part 5)

// function printArray(number) {
//     var newArray = [];
  
//     for(var i = 1; i <= number; i++) {
//       newArray.push(i);
//     }
  
//     return newArray;
//   }

//   console.log(printArray(6))

//Frames Per Second

// function frames(minutes, fps) {
// 	return (minutes * (fps * 60))
// }

// console.log(frames(10, 25))

//Check if an Integer is Divisible By Five

// function divisibleByFive(n) {
// 	return n % 5 === 0
// }

// console.log(divisibleByFive(37))

//Multiple of 100

// function divisible(num) {
// 	// return num % 100 === 0
//     return !(num % 300)
// }

// console.log(divisible(600))

// Divides Evenly

// function dividesEvenly(a, b) {
// 	return !(a % b)
// }

// console.log(dividesEvenly(85, 4))

// Pair Management

// function makePair(num1, num2) {
// 	return [num1, num2]
// }

// console.log(makePair(1, 2))

//Compare Strings by Count of Characters

// function comp(str1, str2) {
// 	return (str1.length === str2.length)
// }

// console.log(comp("hello", "edabit"))

// How Many D's Are There?

// function countDs(sentence) {
// 	// make sentenct lower case
//     // match the d's
//     // count the d's

//     // let lower = sentence.toLowerCase()
//     // let letter = lower.match(/d/g)
//     // return letter.length

//     return sentence.match(/d/g).length
// }

// console.log(countDs("The rodents hibernated in their den."))

//Return the Next Number from the Integer Passed

// function addition(num) {
// 	return ++num
// }

// console.log(addition(-3))

// Movie Theatre Admittance

// function acceptIntoMovie(age, isSupervised) {
// 	// if ( age >= 15) {
//     //     return true
//     // } if (age < 15 && isSupervised === true) {
//     //     return true
//     // } else {
//     //     return false
//     // }

//     if (age >= 15 || age < 15 && isSupervised === true) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(acceptIntoMovie(12, true))

//Area of a Rectangle

// function area(h, w) {
// 	// if (h && w > 0) {
//     //     return h * w
//     // } else {
//     //     return -1
//     // }

//     return h && w > 0 ? h * w : -1
// }

// console.log(area(11, 0))

// Basketball Points

// function points(twoPointers, threePointers) {
// 	return (twoPointers * 2) + (threePointers * 3)
// }

// console.log(points(15, 3))

// Is the String Empty?

// function isEmpty(s) {
// 	if (s === "") {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEmpty("stuff"))

// Solve the Equation

function equation(s) {
	return eval(s)
}

console.log(equation("1+1+1+1+1"))