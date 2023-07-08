/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const ans = {};
  for (let i = 0; i < strs.length; i++) {
    let codes = [...strs[i]].map((item) => item.charCodeAt());
    codes = codes.sort((a, b) => a - b);
    const field = codes.join();
    if (ans[field]) {
      ans[field].push(strs[i]);
    } else {
      ans[field] = [strs[i]];
    }
  }
  return Object.values(ans);
};
