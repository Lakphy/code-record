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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const ans = [root.val];
  let cur = [root];
  let next = [];
  while (true) {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i].left) next.push(cur[i].left);
      if (cur[i].right) next.push(cur[i].right);
    }
    if (next.length === 0) break;
    ans.push(next[next.length - 1].val);
    cur = next;
    next = [];
  }
  return ans;
};
