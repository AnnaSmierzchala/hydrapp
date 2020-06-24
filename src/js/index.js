import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')




//let counterValue = counter.value
//counter.value = counterValue + 1 



let counter = document.querySelector('.counter--js');
const btnAddGlass = document.querySelector('.glass-add--js')
const btnRemoveGlass = document.querySelector('.glass-remove--js')
const water = document.querySelector('.animate')


const key = new Date() .toISOString() .slice(0, 10)

let glassesAmount = localStorage.getItem(key);
//let result = ''

if (glassesAmount) {
    console.log(`ilość szklanek to ${glassesAmount}`)
//result = glassesAmount

} else {
 glassesAmount = 0
 localStorage.setItem(key, glassesAmount)
}

counter.innerHTML = glassesAmount


btnAddGlass.addEventListener('click', function() {
water.classList.remove('animate-remove--js')
water.classList.remove('animate-add--js')
void btnAddGlass.offsetWidth;
water.classList.add('animate-add--js')

++glassesAmount
counter.innerHTML = glassesAmount
//myNumber = myNumber + 1;

localStorage.setItem(key, counter.innerHTML);
//counter.innerHTML = glassesAmount + 1


});


btnRemoveGlass.addEventListener('click', function() {
    if (glassesAmount > 0) {
        water.classList.remove('animate-add--js')
    water.classList.remove('animate-remove--js')
    void btnRemoveGlass.offsetWidth;
    water.classList.add('animate-remove--js')
    counter.innerHTML = --glassesAmount
//myNumber = myNumber - 1;
    }

   
localStorage.setItem(key, counter.innerHTML);
//counter.innerHTML = glassesAmount


})






