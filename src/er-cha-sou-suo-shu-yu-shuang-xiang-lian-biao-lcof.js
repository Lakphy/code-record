/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return root;
  let begin = null;
  let cur = null;
  const middfs = (node) => {
    // left
    if (node.left) middfs(node.left);
    // mid
    if (!begin) {
      begin = node;
      cur = node;
    } else {
      cur.right = node;
      node.left = cur;
      cur = node;
    }
    // right
    if (node.right) middfs(node.right);
  };
  middfs(root);
  cur.right = begin;
  begin.left = cur;
  return begin;
};
