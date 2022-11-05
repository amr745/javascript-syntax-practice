//1. Among Us Imposter Formula

// function imposterFormula(i, p) {
// 	return Math.round(100 * (i / p)) + "%"
// }

// console.log(imposterFormula(1, 10))
// console.log(imposterFormula(2, 5))
// console.log(imposterFormula(1, 8))

//2. Burglary Series (19): Prevent Changes

function preventChanges(obj) {
    // write your code here
    Object.freeze(obj)
      // don't use a return statement
      
      
    // DON'T CHANGE OR REMOVE THE LINES BELOW
    obj.noChanges = false;
    obj.signature = "whatever";
    return obj;
  }

  console.log(preventChanges({ noChanges: true }))