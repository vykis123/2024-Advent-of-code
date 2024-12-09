const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");

const splitedArr = data.split("\r\n");
const indexToSeparate = splitedArr.findIndex((el) => el === "");
const array1 = [...splitedArr.slice(0, indexToSeparate)];
const array2 = [...splitedArr.slice(indexToSeparate + 1, splitedArr.length)];

let total = 0;

for (let number of array2) {
  const numberArr = number.split(",");

  for (let i = 0; i < numberArr.length; i++) {
    if (!checkIfValid(numberArr, i)) break;

    if (i + 1 === numberArr.length) {
      total += parseInt(numberArr[Math.floor(numberArr.length / 2)]);
    }
  }
}

function checkIfValid(array, index) {
  const arrNumber = array[index];

  for (let i = 0; i < array1.length; i++) {
    const ruleArr = array1[i].split("|");
    const ruleNr1 = ruleArr[0];
    const ruleNr2 = ruleArr[1];
    if (ruleNr2 === arrNumber && index === 0 && array.indexOf(ruleNr1) > -1) {
      return false;
    }

    if (ruleNr2 === arrNumber) {
      const ruleNumber1Index = array.findIndex((nr) => nr === ruleNr1);
      if (ruleNumber1Index === -1) continue;
      const ruleNumber2Index = array.findIndex((nr) => nr === ruleNr2);
      if (ruleNumber1Index > ruleNumber2Index) return false;
    }
  }
  return true;
}

console.log(total);
