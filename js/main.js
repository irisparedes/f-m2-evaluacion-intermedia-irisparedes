'use strict';

let acc = document.querySelector('.acc');
let number = document.querySelector('.number');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');



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
      acc ++;
  } else if (userNum < random){
      feedback.innerHTML = 'Demasiado bajo';
      getRandomNumber(100);
      acc ++;
  }else {
      feedback.innerHTML = '¡¡HAS GANADO CAMPEONA!!'
      acc ++;
  };

}
btn.addEventListener('click', guess);
