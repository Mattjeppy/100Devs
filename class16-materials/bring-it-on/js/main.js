// *Variables*
// Create a variable and console log the value
let jennysname = 'Jenny'

// Create a variable, add 10 to it, and alert the value
let num = 10
alert(num += 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(n1,n2,n3,n4) {
    alert(n1-n2-n3-n4) 
}

// Create a function that divides one number by another and returns the remainder
function divideOne(n1,n2) {
    return (n1/n2)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twoNums(n1,n2) { 
    let total = n1 + n2 
    if (total > 50) {
        alert('Jumanji')
    }
}
twoNums(50,5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1,n2,n3) {
    let total = n1 * n2 * n3
    if (total % 3 == 0) {
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopyLoops(wrd,num) {
    for (let i = 1; i < num; i++) {
        console.log(wrd)
    }
}
loopyLoops('toilet', 5)