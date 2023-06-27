/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  let cur = [root];
  let next = [];
  while (1) {
    const res = cur.map((item) => item.val);
    if (res.length < 1) return ans;
    if (ans.length % 2 === 1) res.reverse();
    ans.push(res);
    cur.forEach((item) => {
      next.push(item.left, item.right);
    });
    cur = next.filter((item) => item);
    next = [];
  }
};
