import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './hungrytamagotchi.js';

let grylls = tamagotchi;
grylls.setHunger();

$(document).ready(function() {
//   $('#feedTamagotchi').click(function(event) {
//     event.preventDefault();
//     console.log("before "+grylls.foodLevel);
//     grylls.feed(10);
// $('#hungerLevel').prepend("<div> The tamagotchi's hunger level is " + grylls.foodLevel +"</div>");
// console.log("after "+grylls.foodLevel);
//   });

$('#feedTamagotchi').click(function() {
 // grylls.eatMedium();
 // grylls.feed(12); --- broken because somehow not a function
 function isAliveCheck() {
   if (grylls.foodLevel <= 0) {
     return new Error("You're dead, food level too low");
   } else {
     return true;
   }
 }

 try {
   const isAlive = isAliveCheck();
   if (isAlive instanceof Error) {
     console.error(isAlive.message);
     throw RangeError("foodLevel too low");
   }else {
     console.log("you're safe");
     $('#hungerLevel').prepend("<div> The tamagotchi's hunger level is " + grylls.foodLevel +"</div>");
   }
 } catch (error) {
    console.error(`Red alert! We have an error: ${error.message}`);
 }
});

});
