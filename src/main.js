import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { tamagotchi } from './hungrytamagotchi.js';

let grylls = tamagotchi;
grylls.setHunger();


$(document).ready(function() {
  $('#feedTamagotchi').click(function(event) {
    event.preventDefault();
    console.log("before "+grylls.foodLevel);
    grylls.feed(10);
$('#hungerLevel').prepend("<div> The tamagotchi's hunger level is " + grylls.foodLevel +"</div>");
console.log("after "+grylls.foodLevel);
  });

$('#feedTama').click(function() {
 grylls.eatMedium();
 // grylls.feed(12); --- broken because somehow not a function
 function isAliveCheck() {
   if (grylls.foodLevel <= 0) {
     return new Error("You're dead, food level too low");
   } else {
     return true;
   }
 }

   // $('#outputHungerLevel').html(`<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:${grylls.foodLevel}%;height:20px"></div>`);
setInterval(function(){
  let danger
  if(grylls.foodLevel <= 20){
    danger = "bg-danger"
  }else{
    danger = "bg-success"
  }
  $('#outputHungerLevel').html(`<div class="progress-bar ${danger} progress-bar-striped progress-bar-animated" aria-valuenow="${grylls.foodLevel}"; style="width:${grylls.foodLevel}%;height:20px">${grylls.foodLevel}%</div>`);
}, 1000)


 try {
   const isAlive = isAliveCheck();
   if (isAlive instanceof Error) {
     console.error(isAlive.message);
     throw RangeError("foodLevel too low");
   }else {
     console.log("you're safe");
     // $('#hungerLevel').html("<div> The tamagotchi's hunger level is " + grylls.foodLevel +"</div>");

   }
 } catch (error) {
    console.error(`Red alert! We have an error: ${error.message}`);
 }
});


});
