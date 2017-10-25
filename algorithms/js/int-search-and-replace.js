function myReplace(str, before, after) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      var firstLetter = arr[i].charAt(0);
      var firstLetterUpper = firstLetter.toUpperCase();
      if (firstLetter === firstLetterUpper) {
        var firstLetterAfter = after.charAt(0);
        after = firstLetterAfter.toUpperCase() + after.substring(1);
      }
      arr[i] = after;
    }
  }
  var newStr = arr.join(' ');
  return newStr;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//myReplace("Let us go to the store", "store", "mall") //should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".
//myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
//myReplace("His name is Tom", "Tom", "john") //should return "His name is John".
//myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return "Let us get back to more Algorithms".