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
var lowestCommonAncestor = function (root, p, q) {
    let ans = root.val;
    const haveTarget = (father) => {
        if (father === null) return false;
        const left = haveTarget(father.left);
        const right = haveTarget(father.right);
        if ((left && right) || ((left || right) && (father.val === p.val || father.val === q.val))) ans = father;
        return left || right || father.val === p.val || father.val === q.val;
    }
    haveTarget(root);
    return ans;
};