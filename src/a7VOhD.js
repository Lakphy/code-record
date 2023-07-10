/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0;
  const dp = new Array(s.length)
    .fill(null)
    .map((item) => new Array(s.length).fill(false));
  //   console.log(dp);
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      // console.log(i, j);
      if (i === j) {
        dp[i][j] = true;
        ans++;
      } else if (j === i + 1) {
        if (s[i] === s[j]) {
          dp[i][j] = true;
          ans++;
        }
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
        if (dp[i][j]) ans++;
      }
    }
  }
  // console.log(dp);
  return ans;
};
