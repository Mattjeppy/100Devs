//Create a function that grabs the number of snacks
document.querySelector('#help').addEventListener('click', snackGrabber)

function snackGrabber() {
  document.querySelector('#stops').innerText = ""
  let snackAmount = document.querySelector('input').value
  for (i = 1; i <= snackAmount; i++) {
    document.querySelector('#stops').innerText += ' stop'
  }
}