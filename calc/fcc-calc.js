let inputArr = [];

const numButtons = Array.from(document.getElementsByClassName("button-input"));
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");

numButtons.forEach(el => el.addEventListener("click", inputFunc));
equalsButton.addEventListener("click", equals);
clearButton.addEventListener("click", clear);
backButton.addEventListener("click", back);

function inputFunc() {
  // console.log(this.classList.contains('button-number'));
  if (inputArr[inputArr.length-1] === undefined) {
    inputArr.push(this.innerText);
  } else if (this.classList.contains('button-number')) {
    inputArr[inputArr.length-1] = inputArr[inputArr.length-1] + this.innerText;
  } else {
    inputArr.push(this.innerText);
    inputArr.push("");
  }
  console.log(inputArr);
  display();
}

function display() {
  let input = inputArr.join("");
  inputText.innerText = input;
}

function clear() {
  inputArr = [];
  display();
  outputText.innerText = "";
  inputText.innerText = "";
}

function back() {
  inputArr = inputArr.slice(0,inputArr.length-1)
  // console.log(inputArr);
  display();
}

// function equals() {
//   let equalsArr = inputArr.map(el => {
//     let retEl;
//     !isNaN(parseInt(el)) ? retEl = parseInt(el) : retEl = el;
//     return retEl;
//   })
//   // inputArr.forEach(el => parseInt(el));
//   console.log(equalsArr);
// }

// create str/arr then analyse?