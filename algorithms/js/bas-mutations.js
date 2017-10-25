function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  for (var i = 0; i < word2.length; i++){
    if(word2.indexOf(word1[i]) === -1){
      return false;
    }
  }
  return true;
}

// mutation(["hello", "hey"]);