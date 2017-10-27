/* jshint esversion: 6 */ 

function smallestCommons(arr) {
  
  //sort smallest to largest
  arr.sort((a,b) => a-b);
  
  //create array with all intermediate values
  var fullArr = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }
  
  //smallest and largest possible common multiples
  var SPCM = arr[0] * arr[1];
  var LPCM = 1;
  for (var j = 0; j < fullArr.length; j++) {
    LPCM *= fullArr[j];
  }
  
  // test every value, sum remainder array for 0
  var remainders = [];
  for (var k = SPCM; k <= LPCM; k += SPCM) {
    for (var l = arr[0]; l <= arr[1]; l++) {
      remainders.push(k%l);
    }
    var sum = remainders.reduce((a,b) => a+b);
    if (sum === 0) {
      return k;
    }
    remainders = [];
  }

}

//smallestCommons([1, 5]) //should return 60.
//smallestCommons([5, 1]) //should return 60.
//smallestCommons([1, 13]) //should return 360360.
smallestCommons([23, 18]) //should return 6056820.