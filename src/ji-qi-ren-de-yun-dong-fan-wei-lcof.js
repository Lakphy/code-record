/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var movingCount = function (m, n, k) {
  let ans = 0;
  const matrixSize = (m, n, k) => {
    let ans = 0;
    for (let i = 0; i < m; i++) {
      //   let temp = [];
      for (let j = 0; j < n; j++) {
        // if (
        //   (i.toString() + j.toString())
        //     .split("")
        //     .reduce((prev, cur) => prev + parseInt(cur), 0) > k
        // ) {
        //   temp.push(1);
        // } else {
        //   temp.push(0);
        // }
        if (i + j > k) break;
        ans++;
      }
      //   console.log(temp.join(""), ` ,${i}`);
    }
    // console.log("$$$$$");
    return ans;
  };
  const row = (m - (m % 10)) / 10;
  const col = (n - (n % 10)) / 10;
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      if (i !== row && j !== col) ans += matrixSize(10, 10, k - j - i);
      else if (i === row && j === col)
        ans += matrixSize(m % 10, n % 10, k - j - i);
      else if (i === row) ans += matrixSize(m % 10, 10, k - j - i);
      else if (j === col) ans += matrixSize(10, n % 10, k - j - i);
      if (k - j - i < 9) break;
    }
    if (k - i < 9) break;
  }
  //   console.log(ans);
  return ans;
};
