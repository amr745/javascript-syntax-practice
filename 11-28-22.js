// 1. The Fifth Argument

function fifth() {
  return arguments[4] === undefined ? "Not enough arguments" : typeof arguments[4]
}



console.log(fifth(1, 2, 3, 4, 5))
console.log(fifth("a", 2, 3, true, "five"))
console.log(fifth())