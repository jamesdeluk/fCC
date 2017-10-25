function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {
    return a-b;
  });
  for (var i = 0; i < arr.length+1; i++) {
    if (num < arr[i]) {

    } else { 
    	return i;
    }
  }
}

//getIndexToIns([40, 60], 50) //should return 1.