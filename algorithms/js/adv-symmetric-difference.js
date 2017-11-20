function sym(args) {

  let input;

  if (!Array.isArray(arguments)) {
    input = Array.from(arguments);
  }

  function symDif(input1, input2) {
    let uniques = [];
    for (let j = 0; j < input1.length; j++) {
      if(!input2.includes(input1[j])) {
        uniques.push(input1[j]);
      }
    };
    for (let j = 0; j < input2.length; j++) {
      if(!input1.includes(input2[j])) {
        uniques.push(input2[j]);
      }
    };
    uniques.sort();
    let i = 0;
    while (i < uniques.length-1) {
      if (uniques[i] === uniques[i+1]) {
        uniques.splice(i,1);
        i--;
      }
      i++;
    }
    return uniques;
  }

  return input.reduce(symDif);
}

//sym([1, 2, 3], [5, 2, 1, 4]) //should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) //should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) //should return [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) //should return [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) //should contain only eight elements.


/*

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
https://www.youtube.com/watch?v=PxffSUQRkG4

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-symmetric-difference

https://www.freecodecamp.org/challenges/symmetric-difference

*/