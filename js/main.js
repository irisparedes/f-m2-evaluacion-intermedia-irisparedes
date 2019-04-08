'use strict';

let acc = document.querySelector('.acc');
let number = document.querySelector('.number');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');



// Función número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  console.log('> ' + getRandomNumber(100));

number = number.value;
 
const random = getRandomNumber(100);
/*for (let i = 1; i < 100; i++) {
    acc[i].addEventListener("click", getRandomNumber); 
  } Sin terminar!!! LO dejo para continuar...*/

btn.addEventListener('click', getRandomNumber);
if (number > random){
    feedback.innerHTML = 'Demasiado alto';
    getRandomNumber(100);
    acc ++;
} else if (number < random){
    feedback.innerHTML = 'Demasiado alto';
    getRandomNumber(100);
    acc ++;
}else {
    feedback.innerHTML = '¡¡HAS GANADO CAMPEONA!!'
    acc ++;
};



