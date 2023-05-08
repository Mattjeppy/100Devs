//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['Shrek1','Shrek2','Shrek3']
for (let i = 0; i < movieTitles.length; i++) {
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrayOfNumbers = [1,2,3,4,5,6,7,8]
for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] += 3
}

//Find the average of all the numbers from question three
let total = 0
for (let i = 0; i <arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i]
    return total / arrayOfNumbers.length
}

let sum = 0 

arrayOfNumbers.forEach((num) => sum += num)