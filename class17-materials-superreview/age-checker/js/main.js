//Create a conditonal that checks their age
let age = document.querySelector("#danceDanceRevolution").value
document.querySelector("h1").addEventListener('click', ageChecker)

function ageChecker() {
    if (age < 16){
        console.log("tell them they can not drive")
        document.querySelector("p").innerText = "tell them they can not drive"
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    if (age < 18){
        console.log("they can't hate from outside the club, because they can't even get in")
    }
    //If under 21, tell them they can not drink
    if (age < 21){
        console.log("they can not drink")
    }
    //If under 25, tell them they can not rent cars affordably
    if (age < 25){
        console.log("they can not rent cars affordably")
    }
    //If under 30, tell them they can not rent fancy cars affordably
    if (age < 30){
        console.log(" they can not rent fancy cars affordably")
    }
    //If under over 30, tell them there is nothing left to look forward too
    else {
        console.log("tell them there is nothing left to look forward too")
    }

}
    
    //--- Harder
    //On click of the h1
    //Take the value from the input
    //Place the result of the conditional in the paragraph
    
