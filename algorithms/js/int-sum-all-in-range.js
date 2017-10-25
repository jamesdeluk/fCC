
function sumAll(arr) {
  if (arr[1] < arr[0]) {
    var temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }
  var sum = 0;
  var value = arr[0];
  var i = 0;
  while (value <= arr[1]) {
    sum += value;
    value++;
  }
  return sum;
}

//sumAll([1, 4]) //should return 10.
//sumAll([4, 1]) //should return 10.
//sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.