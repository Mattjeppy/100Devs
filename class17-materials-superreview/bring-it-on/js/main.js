// *Variables*
// Create a variable and console log the value
let num = 10
console.log(num)

// Create a variable, add 10 to it, and alert the value
num += 10
alert(num)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFour (n1,n2,n3,n4) {
    alert(n1-n2-n3-n4)
}
subtractsFour(100,9,8,7)
// Create a function that divides one number by another and returns the remainder
function dividesOneReturn (n1, n2) {
    return (n1 % n2)
}
dividesOneReturn(50,2)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twoNumbersAlert(n1, n2) { 
    if ((n1 + n2) > 50) {
        alert('Jumanji')
    }
twoNumbersAlert(50, 10)
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNumbers(n1,n2,n3) {
    if ((n1*n2*n3) % 3 === 0) {
        alert('ZEBRA')
    }
}
multiplysThreeNumbers(3,1,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber (word, num) {
    for ( i = 1; i <= num; i++) {
        console.log(word)
    }
}
wordNumber('Jumanji', 6)