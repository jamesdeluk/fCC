function fearNotLetter(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
  }
  var last = arr.length - 1;
  if (arr[last] - arr[0] === arr.length - 1) {
    return undefined;
  }
  for (var j = 0; j < arr.length - 1; j++) {
    if (arr[j]+1 !== arr[j+1]) {
      return String.fromCharCode(arr[j]+1);
    }
  }
  return false;
}

//fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
//fearNotLetter("bcd") //should return undefined.
//fearNotLetter("yz") //should return undefined.