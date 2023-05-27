/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  const stack = new Array(k).fill(null);
  let p = head;
  while (p) {
    stack.push(p);
    stack.shift();
    p = p.next;
  }
  return stack[0];
};
