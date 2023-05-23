/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let ans = 0;
  // const dfs = (node,count) => {
  //     if(!node){
  //         ans = Math.max(count,ans);
  //         return true;
  //     }
  //     return dfs(node.left,count+1) && dfs(node.right,count+1);
  // }
  // dfs(root,0);
  const bfs = (node) => {
    let arr = [node];
    let count = 0;
    while (1) {
      arr = arr.reduce((pre, cur) => {
        if (cur) return [...pre, cur.left, cur.right];
        else return pre;
      }, []);
      count++;
      if (arr.length === 0) return count - 1;
    }
  };
  ans = bfs(root);
  return ans;
};
