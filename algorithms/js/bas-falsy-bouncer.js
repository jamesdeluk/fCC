function bouncer(arr) {
  var noFalses = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      noFalses.push(arr[i]);
    }
  }
  return noFalses;
}