Function.prototype.myBind =  function(context, args) {
    const fn = this;
    return function () {
        fn.apply(context, args)
    };
};

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  console.log('this one is broken')
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);

  
  console.log("this should be 'Turning on a lamp'")
  boundTurnOn(); // should say "Turning on a lamp"

  console.log("???")
  myBoundTurnOn(); //