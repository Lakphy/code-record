/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;
    const dfs = (node,p,q)=>{
        if(ans||!node) return false;
        let left = dfs(node.left,p,q);
        let right = dfs(node.right,p,q);
        const self = node===p || node===q;
        if(
            (left&&right) ||
            ((left||right)&&self)
        ) {
            ans = node;
            return false;
        }
        else return left||right||self;
    }
    dfs(root,p,q);
    return ans;
};