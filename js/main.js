'use strict';

const count = document.querySelector('.count');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const reset = document.querySelector('.reset');
let random = getRandomNumber(100);
let i = 0;
count.innerHTML = i;

// Función número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
console.log('->', random);

//Función comparar número usuario con número aleatorio
function guess () {
  const userNum = parseInt(number.value);
  console.log('Número escogido por el usuario', userNum);
  console.log('Número generado aleatoriamente', random);
  if (userNum > random){
      feedback.innerHTML = 'Demasiado alto';
      i = i+1;
      count.innerHTML = i;
      if (userNum > 100) {
        feedback.innerHTML = 'Te alejas mucho, el número debe ser menor de 100';
      }
  } else if (userNum < random){
      feedback.innerHTML = 'Demasiado bajo';
      i = i+1;
      count.innerHTML = i;
        if (userNum < 1) {
          feedback.innerHTML = 'El número no puede ser negativo, ni cero';
        }
  }else {
      feedback.innerHTML = '¡¡HAS GANADO CAMPEONA!!'
      i = i;
      count.innerHTML = i;
  };
}
 //Función para resetear el juego
function resetAll () {
  number.value = '';
  i = 0;
  count.innerHTML = i;
  feedback.innerHTML = 'Escribe un número y dale a Prueba';
  random = getRandomNumber(100);
  console.log('<-',random);
}
//Función para comprobra número con intro.
function enter (e) {
  if (e.keyCode == 13) {
    guess();
  }
}

btn.addEventListener('click', guess);
reset.addEventListener('click', resetAll);
window.addEventListener('keypress', enter);
