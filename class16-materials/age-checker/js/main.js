//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', agechecker)

function agechecker() {
    let age = document.querySelector('#danceDanceRevolution').value
    let place = document.querySelector('#place')
    if (age < 16) {
        place.innerText = 'you cannot drive'
    }
    else if (age < 18) {
        place.innerText = "can't hate from outside the club, because they can't even get in"
    }
    else if (age < 21) {
        place.innerText = "can't drink"
    }
    else if (age < 25) {
        place.innerText = 'you cant afford cars '
    }
    else if (age < 30) {
        place.innerText = 'you cant rent fancy cars affordably'
    }
    else {
        place.innerText = 'nah'
    }
}


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Place the result of the conditional in the paragraph

