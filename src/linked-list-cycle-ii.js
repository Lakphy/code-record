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
var detectCycle = function (head) {
  const map = new Map();
  let p = head;
  while (1) {
    if (!p) return null;
    if (map.get(p)) return p;
    map.set(p, true);
    p = p.next;
  }
  return null;
};
