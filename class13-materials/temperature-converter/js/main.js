//Write your pseduo code first! 
// user enters in the value they want converted
// they click enter
// the javascript will eventlisten for a click from the DOM and run a func
// the func would do the calculation between the temperatures and return the value
// the value will be inserted into the DOM from using an id inside a html tag.

// need the value in celcius
// convert from celcius to farenheit
// return it


document.querySelector('#click').addEventListener('click', celcius)


function celcius() {
    const temp = document.querySelector('#temperature').value
    const farenheit = temp * 1.8 + 32

    document.querySelector('#placefortemperature').innerText = farenheit

}