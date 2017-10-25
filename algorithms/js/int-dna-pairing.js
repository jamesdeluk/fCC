function pairElement(str) {
  var arr = str.split("");
  var arrFixed = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "G") {
      arrFixed.push(["G", "C"]);
    } else if (arr[i] === "C") {
      arrFixed.push(["C", "G"]);
    } else if (arr[i] === "A") {
      arrFixed.push(["A", "T"]);
    } else if (arr[i] === "T") {
      arrFixed.push(["T", "A"]);
    }
  }
  return arrFixed;
}

// G-C C-G A-T T-A

pairElement("GCG"); // [["G", "C"], ["C","G"],["G", "C"]]

//pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].