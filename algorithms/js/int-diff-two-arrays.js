function diffArray(arr1, arr2) {
  var combined = arr1.concat(arr2);
  var sames = [];
  // combine arrays, find duplicate values, filter from combined
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        sames.push(arr1[i]);
      }
    }
  }
  var newArr = combined.filter(f => !sames.includes(f));
  return newArr;
}

//function(f) { return F }; === f => X;

//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // should return ["pink wool"].
//diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //  should return ["diorite", "pink wool"].
//diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) //  should return [].
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //  should return [4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) //  should return ["piglet", 4].
//diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) //  should return ["snuffleupagus", "cookie monster", "elmo"].
//diffArray([1, "calf", 3, "piglet"], [7, "filly"]) //  should return [1, "calf", 3, "piglet", 7, "filly"].


/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
Run tests (ctrl + enter)

*/