/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let headNode = head;
  let cur = head.next;
  head.next = null;
  while (1) {
    if (!cur) break;
    const temp = cur.next;
    cur.next = headNode;
    headNode = cur;
    cur = temp;
  }
  return headNode;
};
