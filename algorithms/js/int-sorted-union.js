function uniteUnique(arr) {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      console.log(arguments[i][j]);
      if (array.indexOf(arguments[i][j]) === -1) {
        array.push(arguments[i][j]);
      }
    }
  }
  return array;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].

// for (var k = array.length - 1; k > -1; k--) {
//   for (var l = 0; l < k; l++) {
//     if (array[k] === array[l]) {
//       array.splice(k,1);
//     }
//   }
// }