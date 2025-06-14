/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const _numStr = num.toString();
  const numStr = _numStr.split("");
  const firstNumStr = numStr[0];
  const length = numStr.length;
  let maxStr = _numStr.split("");
  let minStr = _numStr.split("");
  let maxReplaceStr = null;
  let minReplaceStr = null;

  for (let i = 0; i < length; i++) {
    const cur = numStr[i];
    if (!maxReplaceStr) {
      if (cur != "9") {
        maxReplaceStr = cur;
      }
    }
    if (!minReplaceStr) {
      if (i == "0") {
        if (cur != "1") {
          minReplaceStr = cur;
        }
      } else {
        if (cur != "0" && cur != firstNumStr) {
          minReplaceStr = cur;
        }
      }
    }
    if (maxReplaceStr && cur == maxReplaceStr) {
      maxStr[i] = "9";
    }
    if (minReplaceStr && cur == minReplaceStr) {
      minStr[i] = minReplaceStr == firstNumStr ? "1" : "0";
    }
  }
  return Number(maxStr.join("")) - Number(minStr.join(""));
};
