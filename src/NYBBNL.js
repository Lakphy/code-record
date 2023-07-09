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
var increasingBST = function (root) {
  let ans = null;
  let cur = null;
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      dfs(node.left);
      node.left.left = null;
    }
    // console.log(ans);
    if (!ans) {
      ans = node;
      cur = node;
      node.left = null;
    } else {
      cur.right = node;
      cur.left = null;
      cur = cur.right;
    }
    if (node.right) {
      dfs(node.right);
      node.right.left = null;
    }
  };
  dfs(root);
  if (cur) {
    cur.right = null;
    cur.left = null;
  }
  return ans;
};
