function repeatStringNumTimes(str, num) {
  if (num !== 0) {
    var strRepeat = str;
    for (var i = 1; i < num; i++) {
      strRepeat = strRepeat.concat(str);
    }
    return strRepeat;
  } else {
  return;
	}
}

// repeatStringNumTimes("abc", 3);