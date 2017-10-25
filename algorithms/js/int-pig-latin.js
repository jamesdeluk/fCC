function translatePigLatin(str) {
  var rearranged;
  if (/^[aeiou]$/.test(str[0]) === true) { // if first letter is a vowel
    return rearranged = str + "way";
  }
  if (/^[aeiou]$/.test(str[1]) === false) { // if second letter is a vowel
    if (/^[aeiou]$/.test(str[2]) === false) { // if third letter is a vowel
      if (/^[aeiou]$/.test(str[3]) === true) { // if fourth letter is a vowel (should be with all English words)
        rearranged = str.substring(3) + str.substring(0,3) + "ay"; // first three letters to end
      }  
    } else {
      rearranged = str.substring(2) + str.substring(0,2) + "ay"; // first two letters to end
    }
  } else {
    rearranged = str.substring(1) + str.substring(0,1) + "ay"; // first letter to end
  }
  return rearranged;
}

translatePigLatin("algorithm") //should return "algorithmway".
//translatePigLatin("onsonant");
//translatePigLatin("california") //should return "aliforniacay".
//translatePigLatin("paragraphs") //should return "aragraphspay".
//translatePigLatin("glove") //should return "oveglay".
//translatePigLatin("eight") //should return "eightway".