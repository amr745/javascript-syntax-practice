//1. I'd Like a New Shade of Blue, Please

function howManyWalls(n, w, h) {
    return Math.floor(n / (w * h))
}

console.log(howManyWalls(10, 15, 12))