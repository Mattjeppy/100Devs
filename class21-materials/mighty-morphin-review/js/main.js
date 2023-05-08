// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday
holiday = "South Africa".toUpperCase()
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThreeChar = "learn with leon"
alert(lastThreeChar.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumbers (n1,n2,n3,n4,n5) {
    let total = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(total))
}
fiveNumbers(5,4,6,7,3)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest (n1, n2, n3) {
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails () {
    let result = Math.random()
    if (result < .5){
        return 'heads'
    }else {
        return 'tails'
    }
}
console.log(headsOrTails())
const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlipFlipadelphia(n){
    for(let i = 1; i <=n; i++) {
        console.log(headsOrTails)
    }
}