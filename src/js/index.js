import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')



let counter = document.querySelector('.counter--js');
//let counterValue = counter.value
//counter.value = counterValue + 1 

let myNumber = 0 


const btnAddGlass = document.querySelector('.glass-add--js')
const water = document.querySelector('.animate')

btnAddGlass.addEventListener('click', function(e) {
e.preventDefault
water.classList.remove('animate-add--js')
void btnAddGlass.offsetWidth;
water.classList.add('animate-add--js')
counter.innerHTML = myNumber + 1 
myNumber = myNumber + 1;

});

