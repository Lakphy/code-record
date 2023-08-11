import readline from "readline";

async function read_line() {
  if (!readline) readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function resolver() {
  const line1 = await read_line();
  const [n, m, a] = line1.split(" ").map((item) => parseInt(item));
  const map = [];
  for (let i = 0; i < n; i++) {
    const line = await read_line();
    map.push(
      line
        .split(" ")
        .map((item) => item.split("").map((item) => parseInt(item)))
    );
  }
  const merge = (arr1, arr2) => {
    // console.log(arr1, arr2);
    let ans = 0;
    const n = arr1.length;
    for (let i = 0; i < n; i++) {
      if (arr1[i] !== arr2[i]) ans++;
    }
    return ans;
  };
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let x = i + 1;
      let y = j + 1;
      if (x === n) x = 0;
      if (y === m) y = 0;
      ans += merge(map[i][j], map[x][y]);
    }
  }
  console.log(ans);
}

resolver();
