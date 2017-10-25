function titleCase(str) {
  str = str.toLowerCase();
  split = str.split(" ");
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }
  var titleCase = split.join(" ");
  return titleCase;
}