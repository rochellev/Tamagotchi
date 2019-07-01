export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You let your Tamagotchi DIE!";
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
    if(this.foodLevel >= 100){
      return this.foodLevel = 100;
    }
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `Your Tamagotchi ate ${food}! Food level goes up ${amount}!`
    }
  }
};
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);

//http://www.rafaelservantez.com/writings_tutorials_web_js_update.html
