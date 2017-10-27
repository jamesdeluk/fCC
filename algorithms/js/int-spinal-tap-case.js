function spinalCase(str) {
  var newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // add space
  newStr = newStr.replace(/\s|_/g, "-"); // space or underscore to dash
  newStr = newStr.toLowerCase();
  return newStr;
}

// spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") //should return "all-the-small-things".