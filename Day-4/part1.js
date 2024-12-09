const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf-8");
const map = data.split("\r\n").map((x) => x.split(""));
let total = 0;

const limits = {
  top: 0,
  bottom: map.length - 1,
  left: 0,
  right: map[0].length - 1,
};

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [1, 1],
  [1, -1],
  [-1, 0],
  [-1, 1],
  [-1, -1],
];

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === "X") {
      checkForDirections(i, j);
    }
  }
}

function checkForDirections(axisY, axisX) {
  for (const [y, x] of directions) {
    if (checkForXmas(axisY, axisX, y, x)) total++;
  }
}

function checkForXmas(axisY, axisX, y, x) {
  let string = "";

  for (let i = 0; i < 4; i++) {
    const newYIndex = axisY + i * y;
    const newXIndex = axisX + i * x;

    if (
      newXIndex < limits.left ||
      newXIndex > limits.right ||
      newYIndex < limits.top ||
      newYIndex > limits.bottom
    )
      continue;

    string += map[newYIndex][newXIndex];
    if (string === "XMAS") return true;
  }

  return false;
}

console.log(total);
