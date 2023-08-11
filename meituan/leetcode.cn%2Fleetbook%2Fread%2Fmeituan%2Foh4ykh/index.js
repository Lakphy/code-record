const fs = require("fs");
let lines = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(/\r\n|\r|\n/);

const n = parseInt(lines[0]);
const arr = lines[1].split(" ").map((x) => parseInt(x));
const steps = lines[2]
  .split(" ")
  .map((x) => parseInt(x))
  .reverse();

const map = new Array(n).fill(0);

const updateMax = (arr) => {
  let ans = 0;
  let cur = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) cur = 0;
    else {
      cur = cur + arr[i];
      ans = Math.max(ans, cur);
    }
  }
  return ans;
};
const ans = [];
for (let i = 0; i < n; i++) {
  ans.push(updateMax(map));
  let index = steps[i] - 1;
  map[index] = arr[i];
}
console.log(ans.reverse().join("\n"));
