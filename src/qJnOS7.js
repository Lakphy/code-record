/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length + 1;
  const n = text2.length + 1;
  const map = new Array(m).fill(null).map((item) => new Array(n).fill(0));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        map[i][j] = map[i - 1][j - 1] + 1;
      } else {
        map[i][j] = Math.max(map[i - 1][j], map[i][j - 1]);
      }
    }
  }
  return map[m - 1][n - 1];
};
