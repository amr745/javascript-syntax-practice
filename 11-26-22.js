// 1. Is the Last Character an "N"?

// function isLastCharacterN(word) {
// 	return word.endsWith('n')
// }

// console.log(isLastCharacterN("Aiden"))
// console.log(isLastCharacterN("Piet"))
// console.log(isLastCharacterN("Bert"))
// console.log(isLastCharacterN("Dean"))

// 2. First Class, Second Class and Third Class Levers

// function determineLever(arr) {
// 	return arr[1] === "f" ? "first class lever" : arr[2] === "f" ? "second class lever" : "third class lever"
// }

// console.log(determineLever(["e", "f", "l"]))
// console.log(determineLever(["e", "l", "f"]))
// console.log(determineLever(["f", "e", "l"]))

// 3. Luke, I Am Your ...

// function relationToLuke(name) {
// 	let relationship = {
//         "Darth Vader" : "father",
//         "Leia" : "sister",
//         "Han" : "brother in law",
//         "R2D2" : "droid"
//         } 
//     return "Luke, I am your " + relationship[name] + "."
// }

// console.log(relationToLuke("Darth Vader"))
// console.log(relationToLuke("Leia"))
// console.log(relationToLuke("Han"))

// 4. Similar Bread

// function hasSameBread(arr1, arr2) {
// 	return arr1[0] === arr2[0] && arr1[2] === arr2[2]
// }
// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   ))
// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   ))
// console.log(hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
//   ))

// 5. Is the Word Singular or Plural?

// function isPlural(word) {
// 	return word.endsWith("s")
// }

// console.log(isPlural("changes"))
// console.log(isPlural("change"))
// console.log(isPlural("dudes"))
// console.log(isPlural("magic"))

// 6. Numbers to Arrays and Vice Versa

// function toArray(num) {
// 	return Array.from(String(num), Number)
// }

// function toNumber(arr) {
//     return Number(arr.join(''))
// }

// console.log(toArray(235))
// console.log(toArray(0))
// console.log(toNumber([2, 3, 5]))
// console.log(toNumber([0]))

// 7. Stuttering Function

function stutter(word) {
	return word[0] + word[1] + "... " + word[0] + word[1] + "... " + word + "?"
}

console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))
console.log(stutter("outstanding"))