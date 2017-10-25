function chunkArrayInGroups(arr, size) {
  var sliced = [];
  for (var i = 0; i < (arr.length/size); i++) {
    sliced[i]=[];
  }
  for (var k = 0; k < sliced.length; k++) {
    for (var j = 0; j < size; j++) {
      if (arr.length !== 0) {
        sliced[k][j] = arr.shift();          
      }
    }
  }
  
  return sliced;
}

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)