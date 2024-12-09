const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");
const dataArray = data.split("\r\n");

const array1 = [];
const array2 = [];
let totalCount = 0;

for (let i = 0; i < dataArray.length; i++) {
  const splitedArray = dataArray[i].split("   ");
  array1.push(parseInt(splitedArray[0]));
  array2.push(parseInt(splitedArray[1]));
}

for (let j = 0; j < array1.length; j++) {
  let count = 0;
  array2.forEach((arr) => {
    if (arr === array1[j]) {
      count++;
    }
  });
  totalCount += count * array1[j];
}

console.log(totalCount);
