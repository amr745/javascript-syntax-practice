//1. Among Us Imposter Formula

function imposterFormula(i, p) {
	return Math.round(100 * (i / p)) + "%"
}

console.log(imposterFormula(1, 10))
console.log(imposterFormula(2, 5))
console.log(imposterFormula(1, 8))