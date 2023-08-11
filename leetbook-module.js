const fs = require("fs");
let lines = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(/\r\n|\r|\n/);
console.log(lines);
