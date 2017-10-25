function destroyer(arr) {

  var filter = Array.from(arguments).slice(1);

  for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k < filter.length; k++) {
      if (arr[j] === filter[k]) {
        arr.splice(j, 1);
        // delete arr[j]; // leaves undefined in arr[j]
      }
    }
  }
  
  return arr;
}

destroyer(["tree", "hamburger", 53], "tree", 53)