const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  const t = parseInt(await readline());
  for (let i = 0; i < t; i++) {
    const [x, y] = (await readline()).split(" ").map(Number);
    if (x >= y) console.log("-1 -1");
    else console.log(`${1} ${y - x}`);
  }
})();
