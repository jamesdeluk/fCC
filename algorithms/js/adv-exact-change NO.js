function checkCashRegister(price, cash, cid) {
  var cash = cash.toFixed(2);
  console.log("cash = " + cash);
  var price = price.toFixed(2);
  console.log("price = " + price);
  var change = cash - price;
  change = change.toFixed(2);
  console.log("change = " + change);

  var totalcid = 0;
  for (var i = 0; i < cid.length; i++) {
    totalcid += cid[i][1];
  }
  totalcid = totalcid.toFixed(2);
  console.log("totalcid = " + totalcid);
  console.log(cid);

  // if (change > totalcid) {
  //   return "Insufficient Funds";
  // }

  if (change === totalcid) {
    console.log("Closed");
    return "Closed";
  }

  var hund, twen, ten, five, one, quar, dime, nick, pen;
  hund = twen = ten = five = one = quar = dime = nick = pen = 0;
  
    while (change >= 100) {
      if (cid[8][1] >= 100) {
        hund++;
        changeArr[0] += 1;
        change -= 100;
        cid[8][1] -= 100;
      } else {
        break;
      }
    }
    while (change >= 20) {
      if (cid[7][1] >= 20) {
        twen++;
        change -= 20;
        cid[7][1] -= 20;
      } else {
        break;
      }
    }
    while (change >= 10) {
      if (cid[6][1] >= 10) {
        ten++;
        change -= 10;
        cid[6][1] -= 10;
      } else {
        break;
      }
    }
    while (change >= 5) {
      if (cid[5][1] >= 5) {
        five++;
        change -= 5;
        cid[5][1] -= 5;
      } else {
        break;
      }
    }
    while (change >= 1) {
      if (cid[4][1] >= 1) {
        one++;
        change -= 1;
        cid[4][1] -= 1;
      } else {
        break;
      }
    }
    while (change >= 0.25) {
      if (cid[3][1] >= 0.25) {
        quar++;
        change -= 0.25;
        cid[3][1] -= 0.25;
      } else {
        break;
      }
    }
    while (change >= 0.10) {
      if (cid[2][1] >= 0.10) {
        dime++;
        change -= 0.10;
        cid[2][1] -= 0.10;
      } else {
        break;
      }
    }
    while (change >= 0.05) {
      if (cid[1][1] >= 0.05) {
        nick++;
        change -= 0.05;
        cid[1][1] -= 0.05;
      } else {
        break;
      }
    }
    while (change >= 0.01) {
      if (cid[0][1] >= 0.01) {
        pen++;
        change -= 0.01;
        cid[0][1] -= 0.01;
      } else {
        break;
      }
    }
    if (pen !== 0) {
      pen++;
    }
  
  let changeArr = [hund, twen, ten, five, one, quar, dime, nick, pen];
  console.log(changeArr);
  let valArr = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  console.log(valArr);
  let cashArr = [];
  for (let i = 0; i < changeArr.length; i++) {
    cashArr[i] = changeArr[i] * valArr[i];
  }
  console.log(cashArr);

  if (change > 0.01) { // should be 0
   console.log("Insufficient Funds");
   return "Insufficient Funds";
  }

  hund *= 100;
  hund = hund.toFixed(2);
  twen *= 20; twen = twen.toFixed(2);
  ten *= 10; ten = ten.toFixed(2);
  five *= 5; five = five.toFixed(2);
  one = one.toFixed(2);
  quar *= 0.25; quar = quar.toFixed(2);
  dime *= 0.1; dime = dime.toFixed(2);
  nick *= 0.05; nick = nick.toFixed(2);
  pen *= 0.01; pen = pen.toFixed(2);
  
  // console.log("change = hundreds " + hund + " twenties" + twen + " tens" + ten + " fives" + five + " ones" + one + " quarters" + quar + " dimes" + dime + " nickels" + nick + " pennies" + pen);
  
  // var result = [["ONE HUNDRED", hund], ["TWENTY", twen], ["TEN", ten], ["FIVE", five], ["ONE", one], ["QUARTER", quar], ["DIME", dime], ["NICKEL", nick], ["PENNY", pen]];
   var result = [["ONE HUNDRED", cashArr[0]], ["TWENTY", cashArr[1]], ["TEN", cashArr[2]], ["FIVE", cashArr[3]], ["ONE", cashArr[4]], ["QUARTER", cashArr[5]], ["DIME", cashArr[6]], ["NICKEL", cashArr[7]], ["PENNY", cashArr[8]]];

  for (var j = 0; j < result.length; j++) {
    if (result[j][1] === 0.00) {
      result.splice(j,1);
    }
  }
  
  console.log(result);
  return result;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds"
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Closed".

/*

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

*/