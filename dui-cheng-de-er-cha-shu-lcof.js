/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 递归法
 */
var isSymmetric = function (root) {
  if (!root) return true;
  const judger = (left, right) => {
    if (!left && !right) return true;
    else if (!left || !right) return false;
    else
      return (
        left.val === right.val &&
        judger(left.left, right.right) &&
        judger(left.right, right.left)
      );
  };
  return judger(root.left, root.right);
};
