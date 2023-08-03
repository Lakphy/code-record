/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  KEY = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const keys = digits.split("");
  const track = [];
  const len = keys.length;
  const ans = [];
  const backtrack = (index) => {
    if (index === len) {
      ans.push(track.join(""));
      return;
    }
    const list = KEY[keys[index]];
    for (let i = 0; i < list.length; i++) {
      track.push(list[i]);
      backtrack(index + 1);
      track.pop();
    }
  };
  backtrack(0);
  return ans;
};
