/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let cur = [root];
  let next = [];
  let ans = 1;
  while (1) {
    for (let i = 0; i < cur.length; i++) {
      for (let j = 0; j < cur[i].children.length; j++) {
        if (cur[i].children[j]) next.push(cur[i].children[j]);
      }
    }
    if (next.length === 0) break;
    ans++;
    cur = next;
    next = [];
  }
  return ans;
};
