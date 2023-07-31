/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 && l2)
    return new ListNode(
      (l1.val + l2.val + carry) % 10,
      addTwoNumbers(
        l1.next,
        l2.next,
        (l1.val + l2.val + carry) / 10 >= 1 ? 1 : 0
      )
    );
  else if (l1 && !l2)
    return new ListNode(
      (l1.val + carry) % 10,
      addTwoNumbers(l1.next, l2, l1.val + carry >= 10 ? 1 : 0)
    );
  else if (!l1 && l2)
    return new ListNode(
      (l2.val + carry) % 10,
      addTwoNumbers(l1, l2.next, l2.val + carry >= 10 ? 1 : 0)
    );
  else if (carry === 1) return new ListNode(1);
  else return null;
};
