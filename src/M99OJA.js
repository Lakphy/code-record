/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s, begin = 0, prev = []) {
  if (begin === s.length) return [prev]; // dp终止条件
  const ans = [];
  for (let i = begin; i < s.length; i++) {
    // 从起始点开始不断增大窗口判断回文串
    const a = s.slice(begin, i + 1);
    // console.log(a);
    const b = [...a].reverse().join("");
    if (a === b) {
      // 回文串判断
      ans.push(...partition(s, i + 1, [...prev, a])); // 从窗口结束处开始进入下一阶段回文串入栈
    }
  }
  return ans;
};
