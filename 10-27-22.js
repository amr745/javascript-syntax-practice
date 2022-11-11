//1. Among Us Imposter Formula

// function imposterFormula(i, p) {
// 	return Math.round(100 * (i / p)) + "%"
// }

// console.log(imposterFormula(1, 10))
// console.log(imposterFormula(2, 5))
// console.log(imposterFormula(1, 8))

//2. Burglary Series (19): Prevent Changes

// function preventChanges(obj) {
//     // write your code here
//     Object.freeze(obj)
//       // don't use a return statement
      
      
//     // DON'T CHANGE OR REMOVE THE LINES BELOW
//     obj.noChanges = false;
//     obj.signature = "whatever";
//     return obj;
//   }

//   console.log(preventChanges({ noChanges: true }))

//3. Convert an Array to a String

// function arrayToString(arr) {
// 	return arr.join("")
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

//4. Volume of a Box

// function volumeOfBox(sizes) {
// 	return sizes.length * sizes.width * sizes.height
// }

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))

//5. Number of Stickers

function howManyStickers(n) {
	return n * n * 6
}

console.log(howManyStickers(1))
console.log(howManyStickers(2) )
console.log(howManyStickers(3))