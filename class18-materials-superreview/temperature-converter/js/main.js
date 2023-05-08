//Write your pseudo code first! 
document.querySelector('h1').addEventListener('click', tempConvert)
// get a value from the DOM celcius
function tempConvert () {
let celcius = Number(document.querySelector('#celcius').value)
let farenheit = celcius * 1.8 + 32
document.querySelector('p').innerText = farenheit
}
// convert to farenheit

// put into the DOM