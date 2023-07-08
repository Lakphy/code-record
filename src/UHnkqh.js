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
  if (!head || !head.next) return head;
  let cur = head;
  let next = head.next;
  let temp = null;
  while (1) {
    if (next === null) break;
    cur.next = temp;
    temp = cur;
    cur = next;
    next = cur.next;
  }
  cur.next = temp;
  return cur;
};
