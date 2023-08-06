/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = Object.create(null);
  for (let i = 0; i < strs.length; i++) {
    const hashcode = strs[i]
      .split("")
      .map((item) => item.charCodeAt())
      .sort((a, b) => a - b)
      .join("");
    if (hash[hashcode]) hash[hashcode].push(strs[i]);
    else hash[hashcode] = [strs[i]];
  }
  return Object.values(hash);
};
