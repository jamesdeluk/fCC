function mutationTwo(word1, word2) {
	word1 = word1.toLowerCase();
	word2 = word2.toLowerCase();
  for (var i = 0; i < word2.length; i++){
    if(word2.indexOf(word1[i]) === -1){
      return false;
    }
  }
  return true;
}

// mutation(["hello", "hey"]);