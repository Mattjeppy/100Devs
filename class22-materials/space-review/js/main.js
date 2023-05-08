//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [42,19,"77",33,57]
// let sum = 0
// lotsOfNumbers.forEach(num => sum += num)
// alert(sum)
let sum = nums.reduce( (acc, c) => acc + +c )
// acc = accumulator (sum), c = the new value to add
// +c does the type conversion for you
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numberSquared (arr) {
    squaredArr = arr.map(x => x * x)
    alert(squaredArr)
}
numberSquared([3,4,5])

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    let reversed = str.split("").reverse().join("")
    if (reversed === str) {
        alert("palindrome")
    }else{
        alert("Not a palindrome")
    }
}
palindrome("racecare")
console.log(reverseString("hello"))


