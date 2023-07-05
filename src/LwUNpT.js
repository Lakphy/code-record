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
var findBottomLeftValue = function (root) {
  if (!root) return null;
  let cur = [];
  let next = [root];
  while (1) {
    cur = next;
    next = [];
    // console.log(cur);
    for (let i = 0; i < cur.length; i++) {
      if (cur[i].left) next.push(cur[i].left);
      if (cur[i].right) next.push(cur[i].right);
    }
    if (next.length === 0) break;
  }
  return cur[0].val;
};
