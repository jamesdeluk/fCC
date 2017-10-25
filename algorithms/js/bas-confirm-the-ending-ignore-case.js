function confirmEndingIgnoreCase(str, target) {
	str = str.toLowerCase();
	target = target.toLowerCase();
  var strLast = str.substring(str.length - target.length);
  if (target === strLast) {
      return true;
    } else {
      return false;
    }
}