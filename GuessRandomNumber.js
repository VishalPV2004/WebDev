const minNum = 1;
const maxNum = 100;
const rand = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let run = true;

while (run) {
  guess = window.prompt("Enter a number: ");
  guess1 = Number(guess);

  if (isNaN(guess1)) {
    window.alert("Enter a valid number");
  } else if (guess1 > maxNum || guess1 < minNum) {
    window.alert("Enter a valid number within the range");
  } else {
    attempts++;
    if (guess1 > rand) {
      window.alert("High");
    } else if (guess1 < rand) {
      window.alert("Low");
    } else if (guess1 === rand) {
      window.alert("Correct");
      run = false;
    }
  }
}
