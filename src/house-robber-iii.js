/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 树上动归
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const robber = (node) => {
    if (!node) return [0, 0];
    const [robLeft, noRobLeft] = robber(node.left);
    const [robRight, noRobRight] = robber(node.right);
    // console.log([robLeft,robRight,noRobLeft,noRobRight]);
    return [
      node.val + noRobLeft + noRobRight,
      Math.max(
        robLeft + robRight,
        robLeft + noRobRight,
        robRight + noRobLeft,
        noRobLeft + noRobRight
      ),
    ];
  };
  return Math.max(...robber(root));
};
