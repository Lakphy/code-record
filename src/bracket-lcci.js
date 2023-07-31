/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (m) {
  const track = [];
  let ans = [];
  function backTrack(n) {
    if (n === 0) {
      if (track.length === m * 2) {
        ans.push(track.join(""));
      } else {
        track.push(")");
        backTrack(n);
        track.pop();
      }
    } else {
      track.push("(");
      backTrack(n - 1);
      track.pop();
      if (track.length < 2 * (m - n)) {
        track.push(")");
        backTrack(n);
        track.pop();
      }
    }
  }
  backTrack(m);
  return ans;
};
