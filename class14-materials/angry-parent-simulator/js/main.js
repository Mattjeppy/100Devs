document.querySelector('#yell').addEventListener('click', yell)

function yell () {
 let first = document.querySelector('#firstName').value
 let firstmiddle = document.querySelector('#firstMiddle').value
 let lastmiddle = document.querySelector('#lastMiddle').value
 let last = document.querySelector('#lastName').value

 complete = `${first}, ${firstmiddle}, ${lastmiddle}, ${last}`
 document.querySelector('#placeToYell').innerText = complete

}
