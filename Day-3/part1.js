const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");

const firstSplit = data.split("mul(");
let total = 0;
const tempData = [];

for (let i = 0; i < firstSplit.length; i++) {
  const indx = firstSplit[i].indexOf(")");

  if (indx === -1) continue;

  if (indx > 7) continue;

  if (indx < 3) continue;

  tempData.push(firstSplit[i].substring(0, indx));
}

for (let j in tempData) {
  const newArray = tempData[j].split(",");

  if (
    checkIfNumber(newArray[0] === false) ||
    checkIfNumber(newArray[1]) === false
  ) {
    continue;
  }

  const sum = parseInt(newArray[0]) * parseInt(newArray[1]);

  total += sum;
}
function checkIfNumber(string) {
  let isnum = /^\d+$/.test(string);

  return isnum;
}

console.log(total);
