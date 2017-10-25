function destroyerTwo(first, second) {
  for (var j = 0; j < first.length; j++) {
    for (var k = 0; k < second.length; k++) {
      if (first[j] === second[k]) {
        first.splice(j, 1);
      }
    }
  }
  
  return first;
}

destroyer(["tree", "hamburger", 53], ["tree", 53])