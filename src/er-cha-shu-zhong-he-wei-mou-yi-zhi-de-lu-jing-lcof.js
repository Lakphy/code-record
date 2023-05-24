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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const ans = [];
  if (!root) return ans;
  const dfs = (node, stack) => {
    const nextStack = [...stack, node.val];
    if (node.left) dfs(node.left, nextStack);
    if (node.right) dfs(node.right, nextStack);
    if (!(node.left || node.right)) {
      const sum = stack.reduce((pre, cur) => pre + cur, 0) + node.val;
      if (sum === target) {
        ans.push(nextStack);
      }
    }
  };
  dfs(root, []);
  return ans;
};
