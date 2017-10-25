function mutation(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }

  var word = arr[0].split("");
  var letters = arr[1].split("");
  
  var wordWithoutDupes = word.filter(function(el, index, array) {
    return array.indexOf(el) == index;
  });

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < wordWithoutDupes.length; j++) {
      if (letters[i] == wordWithoutDupes[j]) {
        count++;
      }
    }
  }
  
  if (count==letters.length) {
    return true;
  } else {
    return false;
  }
  
}

mutation(["hello", "hey"]);