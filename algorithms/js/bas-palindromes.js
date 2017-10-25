function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  strRev = str.split('').reverse().join('');
  if (str === strRev) {
  	return true;
  } else {
  	return false;
  }
}

// palindrome("race car");