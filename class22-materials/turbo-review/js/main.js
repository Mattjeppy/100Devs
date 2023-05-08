// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
// Make sure there is no whitespace on either side of the string, 
// and print the value to the console
let favouriteDrink = " Apple Juice "
favouriteDrink.trim()
console.log(favouriteDrink)

//Declare a variable, assign it a string of multiple words, 
// and check to see if one of the words is "apple".
// let str = ["Bob", "Duck", "apple", "dog"]
// if (str.search('apple') !== -1){
//     console.log('yes')
// }else{
//     console.log('no')
// }

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let result = Math.random()
    if (result < .33){
        return "rock"
    }
    else if (result < .66){
        return "paper"
    }
    else{
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines
//  if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
    let computerResult = rockPaperScissors()
    if (
        // win
        (choice === 'rock' && computerResult === 'scissors') ||
        (choice === 'paper' && computerResult === 'rock') ||
        (choice === 'scissors' && computerResult === 'paper')) {
            console.log("You Win!")
        } else if
        (choice === computerResult) {
            console.log("Draw!")
        } else {
        console.log("You Lose!")
    }
}
// checkWin('rock')
        


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is
//  the number of choices in the array. Print the results of each game to the console.
// function playTheGame(x) {

function gamesPlayed (arr) {
    // choice is the argument
    // checkWin(argument)
    arr.forEach(choice => checkWin(choice))
    // arr.forEach(('rock' => checkWin('rock')))
    // arr.forEach(('paper' => checkWin('paper')))
    // arr.forEach(('scissors' => checkWin('scissors')))
}
gamesPlayed(['rock','paper','scissors'])