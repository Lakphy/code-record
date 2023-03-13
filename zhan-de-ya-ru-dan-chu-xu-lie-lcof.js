/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  if (pushed.length === 0) return true;
  let arr = pushed;
  let p = 0;
  for (let i = 0; i < popped.length; i++) {
    let tempIndex = arr.indexOf(popped[i]);
    if (
      tempIndex >= p ||
      arr
        .slice(tempIndex + 1, p + 1)
        .reduce((prev, cur) => prev && cur === null, true)
    ) {
      p = tempIndex;
      arr[tempIndex] = null;
    } else return false;
  }
  return true;
};
