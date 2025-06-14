/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const numStr = `${num}`;

  let max = -1;
  let min = -1;
  for (let i = 0; i < numStr.length; i++) {
    const n = Number(numStr[i]);
    if (n !== 9 && max === -1) max = Number(numStr.replaceAll(numStr[i], 9));
    if (n !== 0 && min === -1) min = Number(numStr.replaceAll(numStr[i], 0));
    if (max !== -1 && min !== -1) return max - min;
  }
  if (max === -1) max = Number(numStr);
  if (min === -1) min = 0;
  return max - min;
};
