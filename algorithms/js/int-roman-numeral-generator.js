function convertToRoman(num) {
  if (num >= 4000) {
    return;
  }
 
  var arrNum = num.toString(10).split("").map(Number);
  var arrRom = [];

  //pattern a aa aaa ab b ba baa baaa ac
  
  if (arrNum[arrNum.length-1] == 1) {arrRom.push("I");}
  if (arrNum[arrNum.length-1] == 2) {arrRom.push("II");}
  if (arrNum[arrNum.length-1] == 3) {arrRom.push("III");}
  if (arrNum[arrNum.length-1] == 4) {arrRom.push("IV");}
  if (arrNum[arrNum.length-1] == 5) {arrRom.push("V");}
  if (arrNum[arrNum.length-1] == 6) {arrRom.push("VI");}
  if (arrNum[arrNum.length-1] == 7) {arrRom.push("VII");}
  if (arrNum[arrNum.length-1] == 8) {arrRom.push("VIII");}
  if (arrNum[arrNum.length-1] == 9) {arrRom.push("IX");}
  
  if (arrNum[arrNum.length-2] == 1) {arrRom.unshift("X");}
  if (arrNum[arrNum.length-2] == 2) {arrRom.unshift("XX");}
  if (arrNum[arrNum.length-2] == 3) {arrRom.unshift("XXX");}
  if (arrNum[arrNum.length-2] == 4) {arrRom.unshift("XL");}
  if (arrNum[arrNum.length-2] == 5) {arrRom.unshift("L");}
  if (arrNum[arrNum.length-2] == 6) {arrRom.unshift("LX");}
  if (arrNum[arrNum.length-2] == 7) {arrRom.unshift("LXX");}
  if (arrNum[arrNum.length-2] == 8) {arrRom.unshift("LXXX");}
  if (arrNum[arrNum.length-2] == 9) {arrRom.unshift("XC");}
    
  if (arrNum[arrNum.length-3] == 1) {arrRom.unshift("C");}
  if (arrNum[arrNum.length-3] == 2) {arrRom.unshift("CC");}
  if (arrNum[arrNum.length-3] == 3) {arrRom.unshift("CCC");}
  if (arrNum[arrNum.length-3] == 4) {arrRom.unshift("CD");}
  if (arrNum[arrNum.length-3] == 5) {arrRom.unshift("D");}
  if (arrNum[arrNum.length-3] == 6) {arrRom.unshift("DC");}
  if (arrNum[arrNum.length-3] == 7) {arrRom.unshift("DCC");}
  if (arrNum[arrNum.length-3] == 8) {arrRom.unshift("DCCC");}
  if (arrNum[arrNum.length-3] == 9) {arrRom.unshift("CM");}
  
  if (arrNum[arrNum.length-4] == 1) {arrRom.unshift("M");}
  if (arrNum[arrNum.length-4] == 2) {arrRom.unshift("MM");}
  if (arrNum[arrNum.length-4] == 3) {arrRom.unshift("MMM");}

  arrRom = arrRom.join("");

 return arrRom;
}

/*convertToRoman(2) //should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"*/
convertToRoman(649) //should return "DCXLIX"
/*convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"*/

/*
Convert the given number into a roman numeral.

1 I
5 V
10 X
50 L
100 C
500 D
1000 M

After = Added
Before = Subtracted
No more than three same in a row

All roman numerals answers should be provided in upper-case.

Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

*/