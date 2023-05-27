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
  // 判断是否有环 及 环长度
  let p1 = head;
  let p2 = head;
  let steps = 0;
  while (1) {
    if (!p1 || !p2) return null;
    steps++;

    // 慢指针
    p1 = p1.next;

    // 快指针
    p2 = p2.next;
    if (!p2) return null;
    p2 = p2.next;

    if (p1 === p2) break;
  }

  // 判断头部位置
  let p3 = head;
  while (1) {
    if (p1 === p3) return p1;
    p1 = p1.next;
    p3 = p3.next;
  }
};
