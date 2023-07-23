/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let s = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (s.length === 0) return s;
    const arr = [];
    for (let j = 0; j < s.length; j++) {
      if (s[j] === strs[i][j]) arr.push(s[j]);
      else break;
    }
    s = arr.join("");
  }
  return s;
};
