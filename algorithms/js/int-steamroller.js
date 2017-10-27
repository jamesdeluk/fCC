var flattened = [];

function steamrollArray(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array) {
            steamrollArray(arr[i]);
        } else {
            flattened.push(arr[i]);
        }
    }
  return flattened;
}

// steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].