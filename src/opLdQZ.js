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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root) return false;
  const hash = {};
  const dfs = (node) => {
    if (node.left) dfs(node.left);
    hash[node.val] = 1;
    if (node.right) dfs(node.right);
  };
  dfs(root);
  const list = Object.keys(hash);
  // console.log(list);
  for (let i = 0; i < list.length; i++) {
    // console.log(hash[k-parseInt(list[i],10)]);
    const id = k - parseInt(list[i], 10);
    if (hash[id] && id !== parseInt(list[i], 10)) return true;
  }
  return false;
};
