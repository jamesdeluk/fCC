function findLongestWord(str) {
  var arr = str.split(" ");
  var longest = arr[0].length;
  for (var i = 1; i < arr.length; i++){
  	if (arr[i].length > longest){
  		longest = arr[i].length;
  	}
  }
  return longest;
}

// findLongestWord("The quick brown fox jumped over the lazy dog");
