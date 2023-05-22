/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let count = k;
  let ans = -1;
  const dfs = (node) => {
    if (!node || ans !== -1) return;
    dfs(node.right);
    count--;
    if (count === 0) ans = node.val;
    dfs(node.left);
  };
  dfs(root);
  return ans;
};
