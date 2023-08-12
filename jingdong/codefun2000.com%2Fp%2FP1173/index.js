const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  const [n, k] = (await readline()).split(" ").map(Number);
  const arr = (await readline()).split(" ").map(Number);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i < k && arr[i] > k) ans -= i;
    if (i >= k && arr[i] <= k) ans += i;
  }
  console.log(ans);
})();
