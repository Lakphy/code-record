const fs = require("fs");
const checkLegal1 = (str) => {
  const num = str.charCodeAt();
  if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) return true;
  else return false;
};
const checkLegal2 = (str) => {
  const num = str.charCodeAt();
  if (num >= 48 && num <= 57) return true;
  else return false;
};
let lines = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(/\r\n|\r|\n/);
const n = parseInt(lines[0]);
for (let i = 0; i < n; i++) {
  const arr = lines[i + 1].split("");
  let numberFlag = false;
  let letterFlag = false;
  for (let i = 0; i < arr.length; i++) {
    const a = checkLegal1(arr[i]);
    const b = checkLegal2(arr[i]);
    if ((!a && !b) || (i === 0 && !a)) {
      numberFlag = false;
      letterFlag = false;
      break;
    }
    if (a) letterFlag = true;
    if (b) numberFlag = true;
  }
  if (numberFlag && letterFlag) console.log("Accept");
  else console.log("Wrong");
}
