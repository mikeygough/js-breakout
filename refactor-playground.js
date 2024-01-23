// CLASSES ---------------------------------------------------------------

// in JavaScript, a Class starts as a function and a function is an object.
function FunkyTown() {
  console.log("Won't you take me to");
}

FunkyTown.band = 'Lipps Inc';

console.log(FunkyTown.band);
console.log(FunkyTown());

// a function is also a class!
const myTown = new FunkyTown();
console.log(myTown); // {} <-- logs an empty object

// using the keyword 'new' in front of the function name returns a new empty object

function Dog(name) {
  this.name = name;
}

const myDog = new Dog('Spot');
console.log(myDog.name); // Spot

// this creates a new object and assigns it to this
// the Dog function is the constructor for your class
// here's how to add a method:

Dog.prototype.bark = function () {
  console.log(`${this.name} says: gimmie a biscuit!`);
};

myDog.bark();

// methods are added to the prototype property
// you must use the 'function' keyword, arrow functions won't work!

// the Class keyword is better, although the same (just syntactic sugar)
// let's remake the Dog class but use the Class keyword

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says: gimmie a biscuit!`);
  }
}

const myDog = new Dog('Spot');
console.log(myDog.name);
myDog.bark();

// inheritance
class SpaceDog extends Dog {
  constructor(name, planet) {
    super(name);
    this.planet = planet;
  }

  shootLater() {
    console.log(`${this.name} shoots lasers!`);
  }
}

const spaceDog = new SpaceDog('Rocko', 'Mars');
console.log(spaceDog.name);
spaceDog.bark();
spaceDog.shootLaser();
spaceDog.planet;

// use the 'extends' keyword for inheritance
// and don't forget to call super() on any properties required by the constructor of the superclass

// MODULES ---------------------------------------------------------------
// modules allow you to organize code by importing and exporting elements.
// just declare your script as a module, for example:
{
  /* <script src="main.js" type="module"></script>; */
}
// then remember to export the class
export default Dog;

// and import in the main.js
// import Dog from './Dog.js'
