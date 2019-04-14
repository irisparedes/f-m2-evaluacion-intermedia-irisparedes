'use strict';

const acc = document.querySelector('.acc');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
let i = 0;
acc.innerHTML = i;

// Función número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
let random = getRandomNumber(100);
console.log('>', random);

//Función comparar número usuario con número aleatorio
function guess () {
  const userNum = parseInt(number.value);
  console.log('Número escogido por el usuario', userNum);
  console.log('Número generado aleatoriamente', random);
  if (userNum > random){
      feedback.innerHTML = 'Demasiado alto';
      getRandomNumber(100);
      i = i+1;
      acc.innerHTML = i;
  } else if (userNum < random){
      feedback.innerHTML = 'Demasiado bajo';
      getRandomNumber(100);
      i = i+1;
      acc.innerHTML = i;
  }else {
      feedback.innerHTML = '¡¡HAS GANADO CAMPEONA!!'
      i = i;
      acc.innerHTML = i;
  };

}
btn.addEventListener('click', guess);
