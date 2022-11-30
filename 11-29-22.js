// 1. Find the Amount of Potatoes

function potatoes(str) {
	return (str.match(/potato/g)).length
}
console.log(potatoes("potato"))
console.log(potatoes("potatopotato"))
console.log(potatoes("potatoapple"))