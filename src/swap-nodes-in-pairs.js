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
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const ans = head.next;
  let prev = head;
  let cur = head.next.next;
  let next = cur.next;
  ans.next = prev;
  prev.next = cur;
  cur.next = next;
  while (1) {
    if (!next || !next.next) break;
    const temp = next.next;
    prev.next = next;
    next.next = cur;
    cur.next = temp;
    //
    prev = cur;
    cur = prev.next;
    next = cur.next;
  }
  return ans;
};
