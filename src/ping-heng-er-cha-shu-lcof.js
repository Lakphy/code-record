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
 */
var isBalanced = function (root) {
  let ans = true;
  const dfs = (node, deep) => {
    // console.log(deep,node);
    if (ans && node) {
      const leftDeep = dfs(node.left, deep + 1);
      const rightDeep = dfs(node.right, deep + 1);
      if (ans && Math.abs(leftDeep - rightDeep) > 1) ans = false;
      return Math.max(leftDeep, rightDeep);
    } else return deep;
  };
  dfs(root, 0);
  return ans;
};
