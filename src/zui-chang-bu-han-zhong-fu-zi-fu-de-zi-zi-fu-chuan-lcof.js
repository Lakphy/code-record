/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 1) return 0;
  let i = 0;
  let j = 0;
  let ans = 0;
  const maxindex = s.length - 1;
  const check = () => {
    const obj = {};
    for (let x = i; x <= j; x++) {
      if (obj[`${s[x]}`]) return false;
      else obj[`${s[x]}`] = 1;
    }
    // console.log(i,j);
    ans = Math.max(ans, j - i + 1);
    return true;
  };
  while (1) {
    if (check()) j++;
    else i++;
    if (i > maxindex || j > maxindex) return ans;
  }
};
