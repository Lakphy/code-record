/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = (p, q) => (
    (!p && !q) ? true
        : (
            (
                p && q && p.val === q.val
                && isSameTree(p.left, q.left)
                && isSameTree(p.right, q.right)
            )
                ? true : false
        )
)