export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }
};
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);
tamagotchi.eatLarge = tamagotchi.feed(15);
tamagotchi.eatYuck = tamagotchi.feed(-10);
tamagotchi.eatPowerUp = tamagotchi.feed(50);
tamagotchi.eatSpecialBonus = tamagotchi.feed(100);
tamagotchi.eatWeirdThing = tamagotchi.feed(Math.floor((Math.random() * 20) + 1));

// export class HungryBear {
//
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//   if (this.foodLevel > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// feed() {
//   this.foodLevel = 10;
// }
// }
