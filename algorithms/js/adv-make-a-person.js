var Person = function(firstAndLast) {
  let fAL = firstAndLast;
    this.getFullName = function() {
      return fAL;
    };
    this.getFirstName = function() {
      return fAL.split(" ")[0];
    };
    this.getLastName = function() {
      return fAL.split(" ")[1];
    };
    this.setFullName = function(firstAndLast) {
      return fAL = firstAndLast;
    };
    this.setFirstName = function(first) {
      let newfAL = fAL.split(" ");
      newfAL[0] = first;
      fAL = newfAL.join(" ");
      return fAL;
    };
    this.setLastName = function(last) {
      let newfAL = fAL.split(" ");
      newfAL[1] = last;
      fAL = newfAL.join(" ");
      return fAL;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

/*

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-make-a-person

https://www.freecodecamp.org/challenges/make-a-person

*/