/**
 * @param {string[]} words
 * @return {number}
 * 掩码位运算查重
 */
var maxProduct = function (words) {
  const len = words.length;
  const masks = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < words[i].length; j++) {
      masks[i] =
        masks[i] | (1 << (words[i][j].charCodeAt() - "a".charCodeAt()));
    }
  }
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((masks[i] & masks[j]) === 0) {
        ans = Math.max(ans, words[i].length * words[j].length);
      }
    }
  }
  return ans;
};
