/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let ans = null;
  const reverse = (node) => {
    // console.log(node);
    if (!node.next) {
      ans = node;
    } else {
      const temp = reverse(node.next);
      temp.next = node;
    }
    return node;
  };
  const temp = reverse(head);
  temp.next = null;
  return ans;
};
