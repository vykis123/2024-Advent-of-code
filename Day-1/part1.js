const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");
const dataArray = data.split("\r\n");

let diffrance = 0;
const firstArr = [];
const secondArr = [];
for (let i = 0; i < dataArray.length; i++) {
  const splitedInput = dataArray[i].split("   ");
  firstArr.push(parseInt(splitedInput[0]));
  secondArr.push(parseInt(splitedInput[1]));
}

firstArr.sort();
secondArr.sort();

for (let j = 0; j < firstArr.length; j++) {
  diffrance += Math.abs(firstArr[j] - secondArr[j]);
}

console.log(diffrance);
