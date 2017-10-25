function truncateString(str, num) {
  var truncated;
  var output;
  if (num >= str.length) {
    output = str;
  } else {
      if (num>3) {
        truncated = str.slice(0,num-3);
      } else {
        for (var i = 3; i >= 0; i--) {
          if (num==i) {
            truncated = str.slice(0,i);
          }
        }
      }
    output = truncated + "...";
  }
  return output;
}

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);