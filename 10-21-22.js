//1. Fullname and Email

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
        this.fullname = this.firstname + " " + this.lastname
        this.email = (this.firstname + "." + this.lastname + "@company.com").toLowerCase()
		// Complete the code!
	}
}

let emp1 = new Employee("John", "Smith")
let emp2 = new Employee("Mary",  "Sue")
let emp3 = new Employee("Antony", "Walker")

console.log(emp3.email)