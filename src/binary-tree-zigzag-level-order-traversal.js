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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let cur = [root];
  let next = [];
  const ans = [[root.val]];
  while (cur.length > 0) {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i].left) next.push(cur[i].left);
      if (cur[i].right) next.push(cur[i].right);
    }
    cur = next;
    next = [];
    if (cur.length > 0) ans.push(cur.map((item) => item.val));
  }
  return ans.map((item, index) => (index % 2 === 1 ? item.reverse() : item));
};
