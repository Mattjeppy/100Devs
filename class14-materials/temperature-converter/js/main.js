document.querySelector('#convert').addEventListener('click', temperature)

function temperature() {
    let temp = document.querySelector('#farenheit').value
    temp = temp * 1.8 - 32
    document.querySelector('#drop').innerText = temp 
}