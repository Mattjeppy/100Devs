//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoAndAlert (n1, n2) {
    alert(n1-n2)
}
subTwoAndAlert(10, 5)
//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(n1,n2,n3) {
    console.log(n1 / n2 / n3)
}
divideThreeAndLog(12,4,3)
//create a function that multiplys three numbers and returns the product
function multiThreeAndReturn(n1,n2,n3) {
    return (n1*n2*n3)
}
multiThreeAndReturn
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of 
// the first two numbers by the third number
function sumAndRemainder(n1,n2,n3) {
    return ((n1+n2) % n3)
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 
// add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value.
//  If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNumbers(n1,n2,n3,n4) {
    let num = (n1 * n2)
    if (num > 100) {
        console.log(num + n3 + n4)
    }
    if (num < 100) {
        console.log(num - n3 - n4)
    }
    else {
        alert((n1*n2*n3) % n4)
    }
}