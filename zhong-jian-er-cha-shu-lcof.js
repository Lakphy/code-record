/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const resolve = (pre, mid) => {
    if (pre.length === 0) return null;
    if (pre.length === 1) return new TreeNode(pre[0]);

    const root = pre[0];
    const index = mid.findIndex((item) => item === root);
    const ans = new TreeNode(root);
    ans.left = resolve(pre.slice(1, index + 1), mid.slice(0, index));
    ans.right = resolve(pre.slice(index + 1), mid.slice(index + 1));
    return ans;
  };
  return resolve(preorder, inorder);
};
