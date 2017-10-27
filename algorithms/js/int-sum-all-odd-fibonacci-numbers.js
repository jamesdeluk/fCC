function sumFibs(num) {
  var fibArr = [1];
  var oddsSum = 0;
  for (var i = 1; i <= num;) {
    fibArr.push(i);
    i = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]; 
  }
  for (var j = 0; j < fibArr.length; j++) {
    if (fibArr[j] % 2 == 1) {
      oddsSum += fibArr[j];
    }
  }
  return oddsSum;
}

// sumFibs(1) //should return a number.
// sumFibs(1000) //should return 1785.
// sumFibs(4000000) //should return 4613732.
// sumFibs(4) //should return 5.
// sumFibs(75024) //should return 60696.
// sumFibs(75025) //should return 135721.

// var arr = [1, 1];
// var odds = 2;
// var end = 1000;
// for (var i = 2; i < end; i++) {
//   arr[i] = arr[i-1] + arr[i-2];
//   if (arr[i] > num) {
//     return odds;
//   } else if (arr[i] % 2 == 1) {
//     odds += arr[i];
//   }
// }