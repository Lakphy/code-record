/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const ans = [];
  const dfs = (node, pre) => {
    if (!node) return;
    const next = pre + node.val;
    if (node.left) dfs(node.left, next);
    if (node.right) dfs(node.right, next);
    if (!node.left && !node.right) {
      ans.push(parseInt(next, 10));
    }
  };
  dfs(root, "");
  return ans.reduce((prev, cur) => prev + cur, 0);
};
