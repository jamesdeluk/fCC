//UPPERCASE only

function rot13(str) {
  
  var ascii = [];
  var decodedArr = [];
  var decodedStr;
  
  // str to ascii arr
  for (var i = 0; i < str.length; i++) {
    ascii[i] = str.charCodeAt(i);
  }
  
  // shift ascii chars
  for (var k = 0; k < ascii.length; k++) {
    if (65 <= ascii[k] && ascii[k] <= 77) {
      ascii[k] += 13;
    } else if (78 <= ascii[k] && ascii[k] <= 90) {
      ascii[k] = ascii[k] -= 13;
    }
  }
  
  // ascii arr to str
  for (var j = 0; j < ascii.length; j++) {
    decodedArr[j] = String.fromCharCode(ascii[j]);
    decodedStr = decodedArr.join("");
  }
  
  return decodedStr;
}
