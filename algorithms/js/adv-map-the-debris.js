function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let Rs, r, r3, T;
  let newArr = arr;

  for (let i = 0; i < arr.length; i++) {
  	rS = arr[i].avgAlt;
	  r = earthRadius + rS;
	  r3 = Math.pow(r,3);
	  T = Math.round(2*Math.PI * Math.sqrt(r3 / GM));
	  delete newArr[i].avgAlt;
		newArr[i].orbitalPeriod = T;
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
 
/*

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-map-the-debris

https://www.freecodecamp.org/challenges/map-the-debris

*/