/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 常规遍历做法会有一个样例爆数组
 * 所以我的答案有缺陷，需要在存储上再做剪枝
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const ans = [];
  let nodes = [root];
  let next = [];
  while (1) {
    let flag = true;
    // console.log(nodes);
    nodes.forEach((item) => {
      if (!item) {
        next.push(null);
        next.push(null);
      } else {
        flag = false;
        next.push(item.left);
        next.push(item.right);
      }
    });
    ans.push(...nodes);
    if (flag) break;
    nodes = next;
    next = [];
  }
  // console.log(ans);
  let flag = true;
  const _ans = [];
  for (let i = ans.length - 1; i >= 0; i--) {
    if (flag && !ans[i]) {
      continue;
    } else {
      flag = false;
      if (ans[i]) _ans.push(ans[i].val);
      else _ans.push(null);
    }
  }
  // console.log(_ans);
  return _ans.reverse();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // console.log(data);
  if (data.length < 1) return null;
  const ans = [new TreeNode(data[0])];
  for (let i = 1; i < data.length; i++) {
    if (data[i] === null) ans.push(null);
    else {
      const node = new TreeNode(data[i]);
      ans.push(node);
      const father = ans[(i - 1) >> 1];
      if (i % 2 === 1) {
        father.left = node;
      } else {
        father.right = node;
      }
    }
  }
  return ans[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
