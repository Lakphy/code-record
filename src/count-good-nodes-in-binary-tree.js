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
var goodNodes = function (root) {
  let ans = 0;
  const history = [-Infinity];
  const dfs = (node, history) => {
    if (Math.max(...history) <= node.val) ans++;
    history.push(node.val);
    if (node.left) dfs(node.left, history);
    if (node.right) dfs(node.right, history);
    history.pop();
  };
  dfs(root, history);
  return ans;
};
