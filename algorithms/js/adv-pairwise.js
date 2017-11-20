function pairwise(arr, arg) {
	// console.log("arr = " + arr);
	// console.log("arg = " + arg);

	let sum = 0;
	let indexArr = [];
	let used = [];

	if (arr.length === 0) {
		console.log(sum);
		return sum;
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arg - arr[i] - arr[j] === 0 && i !== j && !used.includes(i) && !used.includes(j)) {
				indexArr.push(i);
				indexArr.push(j);
				used.push(i);
				used.push(j);
				// console.log("match: " + i + " & " + j);
			}
		}
	}

	sum = indexArr.reduce(function(acc, val) {
		return acc += val;
	})

	console.log(sum);
  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7) //should return 11.
pairwise([1, 3, 2, 4], 4) //should return 1.
pairwise([1, 1, 1], 2) //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
pairwise([], 100) //should return 0.

/*

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-pairwise

https://www.freecodecamp.org/challenges/pairwise

*/

/*

making inverses array, then adding indexOfs
issue: using same number twice

	if (arr.length === 0) {
		return 0;
	}

	let inverse = [];
	let indexes = [];
	let totals = [];
	let matches = [];
	let sum;

	for (let i = 0; i < arr.length; i++) {
		inverse[i] = arg - arr[i];
	}

	console.log("inv = " + inverse);

	for (let i = 0; i < inverse.length; i++) {
		if (arr.indexOf(inverse[i]) === -1) {
			indexes[i] = -arr[i] +1;
		} else if (arr.indexOf(inverse[i]) === arr.indexOf[i]) {
			indexes[i] = arr.indexOf(inverse[i], i+1)
		} else {
			indexes[i] = arr.indexOf(inverse[i]);
		}
	}

	console.log("ind = " + indexes);

	for (let i = 0; i < arr.length; i++) {
		totals[i] = i + indexes[i];
	}

	console.log("tot = " + totals);

	matches = totals.filter(function(el) {
		return el > 0;
	});

	console.log("mat = " + matches);

	sum = matches.reduce(function(sum, value) {
		return sum += value;
	})

	sum /= 2;

	console.log(sum);

*/