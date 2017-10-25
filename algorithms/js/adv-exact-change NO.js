function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var totalcid = 0;
  for (var i = 0; i < cid.length; i++) {
    totalcid += cid[i][1];
  }
  console.log("totalcid = " + totalcid);
  console.log("change = " + change);
  if (change > totalcid) {
    return "Insufficient Funds";
  }
  if (change === totalcid) {
    return "Closed";
  }
  change = change.toFixed(2);
  totalcid = totalcid.toFixed(2);
  var hund = 0; var twen = 0; var ten = 0; var five = 0; var one = 0; var quar = 0; var dime = 0; var nick = 0; var pen = 0;
  
    while (change >= 100) {
      if (cid[8][1] >= 100) {
        hund++;
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
  
  //if (change > 0.01) { // should be 0
  //  return "Insufficient Funds";
  //}
  
  console.log("h" + hund + " t" + twen + " t" + ten + " f" + five + " o" + one + " q" + quar + " d" + dime + " n" + nick + " p" + pen);
  
  hund *= 100; hund = hund.toFixed(2);
  twen *= 20; twen = twen.toFixed(2);
  ten *= 10; ten = ten.toFixed(2);
  five *= 5; five = five.toFixed(2);
  one = one.toFixed(2);
  quar *= 0.25; quar = quar.toFixed(2);
  dime *= 0.1; dime = dime.toFixed(2);
  nick *= 0.05; nick = nick.toFixed(2);
  pen *= 0.01; pen = pen.toFixed(2);
  
  var result = [["ONE HUNDRED", hund], ["TWENTY", twen], ["TEN", ten], ["FIVE", five], ["ONE", one], ["QUARTER", quar], ["DIME", dime], ["NICKEL", nick], ["PENNY", pen]];
  
  for (var j = 0; j < result.length; j++) {
    if (result[j][1] == 0) {
      result.splice(j,1);
    }
  }
  
  return result;
}

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return an array.
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return a string.
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return a string.
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["QUARTER", 0.50]].
//checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds"
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Closed".

/*

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