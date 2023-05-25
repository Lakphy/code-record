/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 递归法
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let ans = [];
  const printNode = (node) => {
    if (node.next) printNode(node.next);
    return ans.push(node.val);
  };
  if (head) printNode(head);
  return ans;
};

/** 队列法
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const ans = [];
  let cur = head;
  while (1) {
    if (!cur) break;
    ans.unshift(cur.val);
    cur = cur.next;
  }
  return ans;
};
