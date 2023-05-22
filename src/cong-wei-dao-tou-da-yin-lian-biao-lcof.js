/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let ans = [];
  const printNode = (node) => {
    if (node.next) printNode(node.next);
    return ans.push(node.val);
  };
  if (head) printNode(head);
  return ans;
};
