/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const arr = [1, 1, 2, 5];
  for (let i = 4; i <= n; i++) {
    const mid = i >> 1;
    let ans = 0;
    for (let j = 0; j < mid; j++) {
      ans += arr[j] * arr[i - 1 - j] * 2;
    }
    if (i % 2 === 1) ans += arr[mid] * arr[mid];
    arr[i] = ans;
  }
  // console.log(arr);
  return arr[n];
};
