//1. Fix the Bug: Simple Array Manipulation

function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++) {
        arr[i]++
    }
    return arr
}

console.log(incrementItems([-1, -2, -3, -4]))