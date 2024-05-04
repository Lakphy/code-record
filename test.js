const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
async function resolve() {
  const n = parseInt(await readline(), 10);
  const arr = (await readline()).split("");
  const link = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < n - 1; i++) {
    const [a, b] = (await readline()).split(" ").map(Number);
    link[a - 1].push(b - 1);
    link[b - 1].push(a - 1);
  }
  let ans = 0;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  const dfs = (cur, parent, path) => {
    let cnt = 0;
    const newPath = path + arr[cur];
    for (const child of link[cur]) {
      if (child !== parent) {
        cnt += dfs(child, cur, newPath);
        if (newPath.endsWith("op") || newPath.endsWith("po")) {
          cnt++;
        }
      }
    }
    for (const child of link[cur]) {
      if (child !== parent) {
        for (let i = 0; i < n; i++) {
          if (dp[child][i] !== 0) {
            dp[cur][i] +=
              dp[child][i] + (newPath.endsWith("o") && arr[i] === "p");
          }
        }
      }
    }
    dp[cur][cur] = cnt;
    return cnt;
  };

  dfs(0, -1, "");

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (dp[i][j] !== 0) {
        ans += dp[i][j];
      }
    }
  }

  console.log(dp);
  return ans;
}

resolve().then(console.log);
