function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return true.
//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return false.
//truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") //should return false.
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") //should return false
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") //should return true
//truthCheck([{"single": "yes"}], "single") //should return true
//truthCheck([{"single": ""}, {"single": "double"}], "single") //should return false
//truthCheck([{"single": "double"}, {"single": undefined}], "single") //should return false
//truthCheck([{"single": "double"}, {"single": NaN}], "single") //should return false

/*

if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")

*/