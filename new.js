const number1 = document.querySelector('#Number1')
const number2 = document.querySelector('#Number2')
const number3 = document.querySelector('#Number3')
const number4 = document.querySelector('#Number4')
const cardName = document.querySelector('.card-holder')
const cardLogo = document.querySelector('.cardLogo')
const cvv = document.querySelector('.cvv')
const form = document.querySelector('#form')


number1.addEventListener('input', () =>{
 if (validateInput (number1)) {
    number1.classList.remove('error')  
    numberFocus(number1, number2)
    changeCardType(number1, cardLogo)
 } else{
    number1.classList.add('error')
 }
} )
number2.addEventListener('input', () =>{
   if (validateInput (number2)) {
    number2.classList.remove('error')  
    numberFocus(number2, number3)
 } else{
    number2.classList.add('error')
 }
} )
number3.addEventListener('input', () =>{
   if (validateInput (number3)) {
    number3.classList.remove('error')  
    numberFocus(number3, number4)
 } else{
    number3.classList.add('error')
 }
} )
number4.addEventListener('input', () =>{
   if (validateInput (number4)) {
    number4.classList.remove('error')  
 } else{
    number4.classList.add('error')
 }
} )
cardName.addEventListener('input', () =>{
    if (validateInputLetter (cardName)) {
        cardName.classList.remove('error')
    }
    else{
        cardName.classList.add('error')
    }
} )
cvv.addEventListener('input', () =>{
   if (validateInput (cvv)) {
    cvv.classList.remove('error')  
 } else{
    cvv.classList.add('error')
 }
} )
cardLogo.addEventListener('input', () =>{
    if (changeCardType (cardLogo)) {
        cardLogo.classList.remove
    }
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert("YOUR PAYMENT WAS SUCCESSFUL")
})

// moving of focus

function numberFocus(number1, number2){
 if (number1.value.length >= number1.maxLength){
        number2.focus()
    }
}

//number pattern

function validateInput(input) {
    let pattern = /^\d+$/.test(input.value);
    if (pattern) {
      console.log('valid Input');
      input.classList.remove('input-error');
      return true;
    } else {
      console.log('invalid Input');
      input.classList.add('input-error');
      return false;
    }
  }

  //letter pattern

  function validateInputLetter(input) {
    let pattern2 = /^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/.test(input.value);
    if (pattern2) {
      console.log('valid input');
      input.classList.remove('input-error');
      return true;
    } else {
      console.log('invalid Input');
      input.classList.add('input-error');
      return false;
    }
  }

  //card logo

   function changeCardType(input, cardLogo) {
    if (input.value.startsWith('4')) {
      console.log('visaCard');
      cardLogo.style.backgroundImage =
        "url('./images/visa.png')";
      input.classList.remove('input-error');
      return true;
    } else if (input.value.startsWith('5') || input.value.startsWith('2')) {
      console.log('masterCard');
      cardLogo.style.backgroundImage =
        "url('./images/Mastercard-Logo.wine.png')";
      input.classList.remove('input-error');
      return true;
    } else if (input.value.startsWith('3')) {
      cardLogo.style.backgroundImage =
        "url('./images/American_Express-Logo.wine.png')";
      console.log('americanExpress');
      input.classList.remove('input-error');
      return true;
    } else {
      cardLogo.style.backgroundImage =
        "url('./images/visa.png')";
      console.log('invalid type');
      input.classList.add('input-error');
      return false;
    }
  }
  //making input show on the card

document.querySelector('.card-number').oninput = () => {
 document.querySelector('.box').innerText = document.querySelector('.card-number').value
}
document.querySelector('.card-number-1').oninput = () => {
 document.querySelector('.box-1').innerText = document.querySelector('.card-number-1').value
}
document.querySelector('.card-number-2').oninput = () => {
 document.querySelector('.box-2').innerText = document.querySelector('.card-number-2').value
}
document.querySelector('.card-number-3').oninput = () => {
 document.querySelector('.box-3').innerText = document.querySelector('.card-number-3').value
}
document.querySelector('.card-holder').oninput = () => {
 document.querySelector('.flex-name').innerText = document.querySelector('.card-holder').value
}
document.querySelector('.month-input').oninput = () => {
 document.querySelector('.expire-mm').innerText = document.querySelector('.month-input').value
}
document.querySelector('.year-input').oninput = () => {
 document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value
}
