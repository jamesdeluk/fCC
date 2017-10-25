function sumPrimes(num) {
  var primesSum = 0;
  var arr = []
  for (var i = 1; i <= num; i++) {
    arr.push(isPrime(i)); //arr[0] is number 1
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === true) {
      primesSum += j+1;
    }
  }
  return primesSum;
}

function isPrime(test) {
  if (test === 0 || test === 1) {
    return false;
  }
  var arr = [];
  for (var p = 2; p < test; p++) {
    arr.push(test%p);
  }
  if (arr.indexOf(0) === -1) {
      return true;
  } else {
    return false;
  }
}

//isPrime(1);

/*
if sum of remainder of num x all those below it is 0 the it's prime
*/

//sumPrimes(10) //should return 17.
sumPrimes(977) //should return 73156.