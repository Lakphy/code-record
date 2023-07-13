/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length;
  const map = new Array(n + 1).fill(0).map((item, index) => index);
  const findRoot = (index) => {
    if (map[index] === index) return index;
    else return findRoot(map[index]);
  };
  for (let i = 0; i < n; i++) {
    // console.log(map);
    const edge = edges[i];
    const left = edge[0];
    const right = edge[1];
    const leftRoot = findRoot(left);
    const rightRoot = findRoot(right);
    if (leftRoot === rightRoot) return edge;
    map[leftRoot] = rightRoot;
  }
};
