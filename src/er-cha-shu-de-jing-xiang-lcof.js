/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  const mirror = (node) => {
    if (!node) return null;
    const ans = new TreeNode(node.val);
    ans.left = mirror(node.right);
    ans.right = mirror(node.left);
    return ans;
  };
  return mirror(root);
};
