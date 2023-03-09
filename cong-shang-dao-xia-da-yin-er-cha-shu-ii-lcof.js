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
  if (!root) return []; // 太坑人了，第一个样例给我个空节点？？？
  let ans = [[root]];
  while (1) {
    let arr = ans[ans.length - 1]
      .reduce((prev, cur, index, arr) => {
        return [...prev, cur.left, cur.right];
      }, [])
      .filter((value) => value !== null && value.val !== null);
    if (arr.length) ans.push(arr);
    else break;
  }
  return ans.map((item) => {
    return item.map((_item) => {
      return _item.val;
    });
  });
};
