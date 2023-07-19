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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = null;
  let t = k;
  const search = (node) => {
    if (!node || ans) return;
    search(node.left);
    k--;
    if (k === 0) ans = node.val;
    search(node.right);
  };
  search(root);
  return ans;
};
