//7. Arrow Functions

// add2 = (x) => x + 2

// add3 = (x) => x + 3

// add5 = (x) => x + 5

// add7 = (x) => x + 7

// add11 = (x) => x + 11

// console.log(add5(2))


//6. Recursion: Length of a String

// function length(str) {
//     if(str === "") return 0;
// 	return length(str.substr(1)) + 1;
// }

// console.log(length("apple"))


//5. ES6: Destructuring Arrays I

// const arr = [1, 2, 3, 4, 5, 6]
// let [ a, b ] = arr

// console.log(a) // outputs 1
// console.log(b) // outputs 2


//4. Radian to Degree

// function toDegree(radian) {
// 	return (radian/Math.PI) * 180
// }

// console.log(toDegree(Math.PI/3))


//.3 Upvotes vs Downvotes

// function getVoteCount(votes) {

//     return votes.upvotes - votes.downvotes

// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))


//2. Minimal IV: if-else if-else Inferno

// function equilibrium(x) {
// 	if (x > 0) return "positive"
// 	if (x < 0) return "negative"
// 	return true
// }

// console.log(equilibrium(0))

// function compare_to_100 (x) {
//     if (x > 100) return "greater"
//     if (x < 100) return "smaller"
//     return "equal"
// }

// console.log(compare_to_100 (100))

//1. Fullname and Email

// class Employee {
// 	constructor (firstname, lastname) {
// 		this.firstname = firstname
// 		this.lastname = lastname
//         // Complete the code!
//         this.fullname = `${this.firstname} ${this.lastname}`
//         this.email = `${this.firstname}.${this.lastname}@company.com"`.toLowerCase()
// 	}
// }

// let emp1 = new Employee("John", "Smith")
// let emp2 = new Employee("Mary",  "Sue")
// let emp3 = new Employee("Antony", "Walker")

// console.log(emp3.email)