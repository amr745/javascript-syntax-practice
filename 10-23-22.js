//1. Leap Year Function

function leapYear(year) {
    for (i = 0; i <= year; i++) {
        return i % 4 === 0 && i % 100 !== 0 || i % 400 === 0
    }
}
console.log(leapYear(2000))