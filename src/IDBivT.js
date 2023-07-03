/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const track = [];
  const ans = [];
  const backtrack = (n, reverse) => {
    // console.log(track);
    if (n === 0 && reverse === 0) ans.push(track.join(""));
    if (reverse > 0) {
      track.push(")");
      backtrack(n, reverse - 1);
      track.pop();
    }
    if (n > 0) {
      track.push("(");
      backtrack(n - 1, reverse + 1);
      track.pop();
    }
  };
  backtrack(n, 0);
  return ans;
};
