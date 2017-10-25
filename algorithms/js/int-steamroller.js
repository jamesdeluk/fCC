var flattened = [];

function steamrollArray(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] instanceof Array){
            steamrollArray(arr[i]);
        }else{
            flattened.push(arr[i]);
        }
    }
  return flattened;
}

// didn't work on fCC although output was correct (simply without spaces in output array)

steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function steamrollArray(arr) {
  var flat = [];
  flat = flatten(arr);
  flat = flatten(flat);
  flat = flatten(flat);
  return flat;
}

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
}

function steamrollArray(arr) {
  if (Array.isArray(arr) === true) {
    var loops = 0;
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (Array.isArray(arr[i]) === true) {
        loops = 1;
        }
      }
    }
  loops = 6; // need to do this automagically
  var flat = arr.reduce((a, b) => a.concat(b), []);
  while (loops > 0) {
    flat = flat.reduce((a, b) => a.concat(b), []);
    loops--;
  }
  return flat;
}

function steamrollArray(arr) {
  var flat = [];
  if (Array.isArray(arr) === true) {
    flat = arr.reduce((a, b) => a.concat(b), []);
    console.log(flat);
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(flat[i]) === true) {
        flat = arr.reduce((a, b) => a.concat(b), []);
        console.log(flat);
        for (var j = 0; j < arr.length; j++) {
          if (Array.isArray(flat[j]) === true) {
          flat = arr.reduce((a, b) => a.concat(b), []);
          console.log(flat);
          }
        }
      }
    }
  }
  return flat;
}

*/