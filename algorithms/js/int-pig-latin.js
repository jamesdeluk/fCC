function translatePigLatin(str) {
  var rearranged;
  if (/^[aeiou]$/.test(str[0]) === true) {
    return rearranged = str + "way";
  }
  if (/^[aeiou]$/.test(str[1]) === false) {
    if (/^[aeiou]$/.test(str[2]) === false) {
      if (/^[aeiou]$/.test(str[3]) === true) {
        rearranged = str.substring(3) + str.substring(0,3) + "ay";
      }
      
    } else
      rearranged = str.substring(2) + str.substring(0,2) + "ay";
  } else
    rearranged = str.substring(1) + str.substring(0,1) + "ay";
  
  return rearranged;
}

//translatePigLatin("onsonant");
//translatePigLatin("california") //should return "aliforniacay".
//translatePigLatin("paragraphs") //should return "aragraphspay".
//translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
//translatePigLatin("eight") //should return "eightway".

/*
// str.substring(3,4) === str[3]
*/
