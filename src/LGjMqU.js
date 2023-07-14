/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 找中点
  let slow = head; // 中点
  let fast = head.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  // 反转后半部分
  let ans = null; // 反转后的头节点
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
  const temp = reverse(slow);
  temp.next = null;
  // 合并
  let p1 = head;
  let p2 = ans;
  while (p1 && p2) {
    // console.log(p1, p2);
    const temp = p1.next;
    p1.next = p2;
    p1 = temp;
    const temp2 = p2.next;
    if (p1 === null) p2.next = temp2;
    else p2.next = p1;
    p2 = temp2;
    if (p1 && p1.next === slow) p1.next = null;
  }
  if (p1) p1.next = null;
  if (p2) p2.next = null;
  return head;
};
