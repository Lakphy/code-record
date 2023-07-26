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
var sortList = function (head) {
  // 终止条件
  if (!head) return null;
  if (!head.next) return head;
  if (!head.next.next) {
    if (head.val < head.next.val) return head;
    else {
      const temp = head.next;
      head.next.next = head;
      head.next = null;
      return temp;
    }
  }

  // 寻找中点
  let slow = head;
  let fast = head.next.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  // 分割链表
  let left = head;
  let right = slow.next;
  slow.next = null;

  // 递归排序
  left = sortList(left);
  right = sortList(right);

  // 设立返回链表头
  const h = left.val < right.val ? left : right;
  let pre = null;
  if (left.val < right.val) {
    pre = left;
    left = left.next;
  } else {
    pre = right;
    right = right.next;
  }

  // 合并链表
  while (left && right) {
    if (left.val < right.val) {
      pre.next = left;
      left = left.next;
    } else {
      pre.next = right;
      right = right.next;
    }
    pre = pre.next;
  }

  // 处理剩余链表
  if (!left) pre.next = right;
  if (!right) pre.next = left;

  // 返回链表头
  return h;
};
