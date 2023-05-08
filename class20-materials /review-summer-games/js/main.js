//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let arrayOfNumbers = [10,2,3]

function multiplyArrays (arr) {
    let total = 1
    arr.forEach(num => total *= num)
    // for (let i = 0; i < arr.length; i++) {
    //     total *= arr[i]
    // }
    alert(total)

}
multiplyArrays(arrayOfNumbers)
n