function myReplace(str, before, after) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      if (arr[i][0] === arr[i][0].toUpperCase()) {
        after = after[0].toUpperCase() + after.substring(1);
      }
      arr[i] = after;
    }
  }
  var strReplaced = arr.join(' ');
  return strReplaced;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".

// var firstLetter = arr[i].charAt(0);
// var firstLetterUpper = firstLetter.toUpperCase();
// if (firstLetter === firstLetterUpper) {
//   var firstLetterAfter = after.charAt(0);
//   after = firstLetterAfter.toUpperCase() + after.substring(1);
// }
// arr[i] = after;