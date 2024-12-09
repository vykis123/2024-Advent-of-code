const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf-8");

data = data.split("\r\n").join();
let total = 0;
let index = 0;
let searching = true;

const mulRegex = /mul\((\d+),(\d+)\)/g;
const dontRegex = /don't\(\)/g;
const doRegex = /do\(\)/g;

while (index < data.length) {
  if (searching) {
    const mulMatch = mulRegex.exec(data);
    const dontMatch = dontRegex.exec(data);
    console.log(mulMatch);
    if (mulMatch && (!dontMatch || mulMatch.index < dontMatch.index)) {
      total += mul(mulMatch[1], mulMatch[2]);
      index = mulMatch.index + mulMatch[0].length;
    } else if (dontMatch) {
      searching = false;
      index = dontMatch.index + dontMatch[0].length;
    } else {
      break;
    }
  } else {
    const doMatch = doRegex.exec(data);
    if (doMatch) {
      searching = true;
      index = doMatch.index + doMatch[0].length;
    } else {
      break;
    }
  }

  mulRegex.lastIndex = index;
  dontRegex.lastIndex = index;
  doRegex.lastIndex = index;
}

console.log(total);

function mul(x, y) {
  return Number(x) * Number(y);
}

// const firstSplit = data.split("do()");

// const mulRegex = /mul\((\d+),(\d+)\)/g;
// const dontRegex = /don't\(\)/g;
// const tempData = [];
// let total = 0;

// for (let i in firstSplit) {
//   const index = firstSplit[i].search(dontRegex);
//   let myArray;

//   if (firstSplit[i].substring(0, index) === "") continue;

//   while (
//     (myArray = mulRegex.exec(firstSplit[i].substring(0, index))) !== null
//   ) {
//     tempData.push(myArray[0]);
//   }
// }

// for (let i = 0; i < tempData.length; i++) {
//   const splited = tempData[i].split(",");
//   const indexOfopenBracket = splited[0].indexOf("(");
//   const indexOfcloseBracket = splited[1].indexOf(")");

//   const firstNumber = splited[0].substring(
//     indexOfopenBracket + 1,
//     splited[0].length
//   );
//   const secondNumber = splited[1].substring(0, indexOfcloseBracket);

//   total += parseInt(firstNumber) * parseInt(secondNumber);
// }

// console.log(total);
