const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  const n = parseInt(await readline());
  const arr = (await readline()).split(" ");
  const hash = Object.create(null);
  for (let i = 0; i < n; i++) {
    const cur = arr[i];
    hash[cur] = hash[cur] ? hash[cur] + 1 : 1;
  }
  const values = Object.values(hash);
  let ans = 0;
  for (let i = 0; i < values.length; i++) {
    ans += values[i] - 1;
  }
  console.log(ans);
})();
