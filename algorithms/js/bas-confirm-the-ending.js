function confirmEnding(str, target) {
  var strLast = str.substring(str.length - target.length);
  if (target === strLast) {
      return true;
    } else {
      return false;
    }
}