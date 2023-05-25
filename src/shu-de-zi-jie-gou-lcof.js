/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  let rootA = [];
  if (!B) return false;
  const dfs = (node) => {
    if (node.val === B.val) {
      rootA.push(node);
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };
  dfs(A);
  if (!rootA) return false;
  const compare = (nodeA, nodeB) => {
    let ans = true;
    const dfs_compare = (nodeA, nodeB) => {
      if (
        nodeA.val !== nodeB.val ||
        (!nodeA.left && nodeB.left) ||
        (!nodeA.right && nodeB.right)
      ) {
        ans = false;
        return;
      }
      if (nodeA.left && nodeB.left) dfs_compare(nodeA.left, nodeB.left);
      if (nodeA.right && nodeB.right) dfs_compare(nodeA.right, nodeB.right);
    };
    dfs_compare(nodeA, nodeB);
    return ans;
  };
  return rootA.reduce((pre, cur) => {
    // console.log(compare(cur,B));
    return pre || compare(cur, B);
  }, false);
  // return ans;
};
