function sumAll(arr) {
  arr.sort(function(a,b){
    return a-b;
  });
  var sum = 0;
  var value = arr[0];
  while (value <= arr[1]) {
    sum += value;
    value++;
  }
  return sum;
}

sumAll([10, 5]) //should return 45.