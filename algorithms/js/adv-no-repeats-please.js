function permAlone(str) {

  let n = str.length;
  let arr = str.split("");
  let perms = [];
  let newPerms = [];
  
  function perm(n, arr) {
    if (n === 1) {
      perms.push(arr.toString()); // simply pushing array into array won't work
    }
    else {
      for (let j = 0; j < n-1; j++) {
        perm(n-1, arr);
        if (n%2 === 0) {
          let tmp = arr[j];
          arr[j] = arr[n-1];
          arr[n-1] = tmp;
        }
        else {
          let tmp = arr[0];
          arr[0] = arr[n-1];
          arr[n-1] = tmp;
        }
      }
      perm(n-1, arr);
    }
  }

  perm(n,arr);

  for (let j = 0; j < perms.length; j++) {
    // newPerms.push(perms[j].split(",").join("")); //less efficient?
    perms[j] = perms[j].replace(/\,/g, ""); //array of arrays workaround
  }

  for (let j = 0; j < perms.length; j++) {
    if (!perms[j].match(/([a-z])\1+/g)) {
      newPerms.push(perms[j]);
    }
  }

  console.log(newPerms.length);
  return newPerms.length;
}

permAlone("aab") //should return a number.
permAlone("aab") //should return 2.
permAlone("aaa") //should return 0.
permAlone("aabb") //should return 8.
permAlone("abcdefa") //should return 3600.
permAlone("abfdefa") //should return 2640.
permAlone("zzzzzzzz") //should return 0.
permAlone("a") //should return 1.
permAlone("aaab") //should return 0.
permAlone("aaabb") //should return 12.

/*

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

https://www.mathsisfun.com/combinatorics/combinations-permutations.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-no-repeats-please

https://www.freecodecamp.org/challenges/no-repeats-please

procedure generate(n : integer, A : array of any):
  if n = 1 then
        output(A)
  else
      for i := 0; i < n - 1; i += 1 do
          generate(n - 1, A)
          if n is even then
              swap(A[i], A[n-1])
          else
              swap(A[0], A[n-1])
          end if
      end for
      generate(n - 1, A)
  end if

*/