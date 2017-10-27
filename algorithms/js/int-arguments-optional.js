function addTogether() {
  var args = arguments;
  if (typeof args[0] !== 'number') {
    return undefined;
  }
  if (arguments.length === 2) {
    if (typeof args[1] !== 'number') {
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }
  }
  if (arguments.length === 1) {
    return function(b) {
      if (typeof b !== 'number') {
        return undefined;
      }
      return args[0] + b;
    };
  }
}

//addTogether(2, 3) //should return 5.
// addTogether(2)(3); //should return 5.
//addTogether("http://bit.ly/IqT6zt") //should return undefined.