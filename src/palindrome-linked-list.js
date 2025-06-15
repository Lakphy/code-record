/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head.next) return true;
  let left = head;
  // 1. 快慢指针拿到中点
  const getMid = (node) => {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };
  const _mid = getMid(head);
  const mid = _mid.next;
  _mid.next = null;
  // 2. 反转后半部分
  const reverse = (node) => {
    let cur = node;
    let prev = null;
    while (cur) {
      let temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    return prev;
  };
  let right = reverse(mid);
  // 3. 比对
  while (left && right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  if (!(left || right) || !(left && left.next) || !(right && right.next))
    return true;
  else return false;
};
