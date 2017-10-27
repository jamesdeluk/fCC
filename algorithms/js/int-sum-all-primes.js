function sumPrimes(num) {
  var primesSum = 0;
  var arr = [];
  for (var i = 1; i <= num; i++) {
    primesSum += isPrime(i);
  }
  return primesSum;
}

function isPrime(test) {
  if (test === 0 || test === 1) {
    return 0;
  }
  if (test !== 2) {
    if (test % 2 === 0) {
      return 0;
    }
  }
  for (var p = 3; p < test; p+=2) {
    if (test % p === 0) {
      return 0;
    }
  }
  return test;
}

// sumPrimes(10) //should return 17.
// sumPrimes(977)  //should return 73156.