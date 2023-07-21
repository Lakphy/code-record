/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let cur = headA;
  let lenA = 0;
  while (cur) {
    lenA++;
    cur = cur.next;
  }
  cur = headB;
  let lenB = 0;
  while (cur) {
    lenB++;
    cur = cur.next;
  }
  let diff = Math.abs(lenA - lenB);
  let long = lenA > lenB ? headA : headB;
  let short = lenA > lenB ? headB : headA;
  while (diff--) long = long.next;
  while (long !== short) {
    long = long.next;
    short = short.next;
  }
  return long;
};
