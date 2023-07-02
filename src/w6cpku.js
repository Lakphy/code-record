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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    ans += node.val;
    node.val = ans;
    dfs(node.left);
  };
  dfs(root);
  return root;
};
