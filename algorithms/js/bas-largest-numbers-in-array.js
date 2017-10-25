function largestOfFour(arr) {
	var largests = [];
	var largest;
  for (var i = 0; i < arr.length; i++) { //individual subarrays
  	largest = arr[i][0]; //assume first element is largest
  	for (var j = 1; j < arr[i].length; j++) { //individual elements in subarray
  		if (arr[i][j] > largest) { //compare element with largest
  			largest = arr[i][j]; //if larger, set largest
  		}
  	}
  	largests.push(largest); //add largest from each to largests array
  }
  return largests;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])