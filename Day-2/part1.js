const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");
const inputArray = data.split("\r\n");
let safeReports = 0;

for (let i = 0; i < inputArray.length; i++) {
  let array = inputArray[i].split(" ");
  array = array.map(Number);

  const value = checkIfArrayIsValid(array);

  if (value) {
    safeReports++;
  }
}

console.log(safeReports);

function checkIfArrayIsValid(array) {
  let increasing = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) return false;

    if (array[i] > array[i + 1]) {
      if (increasing === "dec") return false;

      const diff = Math.abs(array[i] - array[i + 1]);

      if (diff > 3 || diff < 1) return false;

      increasing = "incr";
    }

    if (array[i] < array[i + 1]) {
      if (increasing === "incr") return false;

      const diff = Math.abs(array[i] - array[i + 1]);

      if (diff > 3 || diff < 1) return false;

      increasing = "dec";
    }
  }

  return true;
}
