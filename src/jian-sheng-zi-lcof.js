/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const arr = [1, 1, 1, 1];
  for (let i = 2; i <= n + 1; i++) {
    arr[i] = Math.max(
      ...new Array(i - 1).fill(null).map((item, j) => {
        if (arr[j + 1] > j + 1) return arr[j + 1] * (i - j - 1);
        else return (j + 1) * (i - j - 1);
      })
    );
  }
  // console.log(arr);
  return arr[n];
};
