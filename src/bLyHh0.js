/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const len = isConnected.length;
  const map = new Array(len).fill(0).map((item, index) => index);
  const find = (x) => {
    if (x === map[x]) return x;
    return (map[x] = find(map[x]));
  };
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (isConnected[i][j] === 1) {
        const root1 = find(i);
        const root2 = find(j);
        if (root1 !== root2) map[root1] = root2;
      }
    }
  }
  // console.log(map);
  const hash = {};
  for (let i = 0; i < len; i++) hash[find(i)] = true;
  return Object.keys(hash).length;
};
