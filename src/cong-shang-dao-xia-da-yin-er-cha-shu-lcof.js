/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let cur = [root];
  let next = [];
  const ans = [];
  while (1) {
    if (cur.length < 1) break;
    cur.forEach((item) => {
      ans.push(item.val);
      next.push(item.left);
      next.push(item.right);
    });
    cur = next.filter((item) => item);
    next = [];
  }
  return ans;
};
