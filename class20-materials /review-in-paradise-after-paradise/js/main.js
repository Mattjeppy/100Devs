// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function lastNumberFirstNumber(arr) {
    let lastIndex = (arr.length - 1)
    if (arr[0] < lastIndex) {
        alert("Hi")
    }else if (arr[0] > lastIndex) {
        alert("Bye")
    } else {
        alert("We close in an hour")
    }
}
let arrForFunction = [10,20,30,40,50]
lastNumberFirstNumber(arrForFunction)

for (let i = 0; i < arrForFunction.length; i++) {
    console.log(arrForFunction[i])
}

arrForFunction.forEach((x,i) => console.log(arrForFunction[i]))
arrForFunction.forEach((x,i) => console.log(x))

let bestColors = ['green', 'blue', 'yellow', 'black']
// x is the value, i is the index (incriment)
bestColors.forEach((x) => console.log(x))
bestColors.forEach((x,i) => console.log(x))