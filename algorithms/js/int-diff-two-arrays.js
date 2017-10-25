function diffArray(arr1, arr2) {

  var arr1f = arr1.filter(el => !arr2.includes(el));
  var arr2f = arr2.filter(el => !arr1.includes(el));
  var diff = arr1f.concat(arr2f);

  return diff;
}

// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) //  should return ["piglet", 4].

//function(f) { return F }; === f => F;

// var combined = arr1.concat(arr2);
// var sames = [];
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       sames.push(arr1[i]);
//     }
//   }
// }
// // var diff = combined.filter(f => !sames.includes(f));
// var diff = combined.filter(function(el){
//   return !sames.includes(el);
// });