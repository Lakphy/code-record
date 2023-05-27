/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  let last = null;
  let p1 = l1;
  let p2 = l2;
  let head;
  const toNext = (p) => {
    if (last) last.next = p;
    else head = p;
    last = p;
    return p.next;
  };
  while (1) {
    if (!p1 || !p2) break;
    else if (p1.val < p2.val) p1 = toNext(p1);
    else p2 = toNext(p2);
  }
  if (last) last.next = p1 ? p1 : p2;
  else {
    last = p1 ? p1 : p2;
    head = last;
  }
  return head;
};
