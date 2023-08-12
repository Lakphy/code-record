/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 1) return null;
  if (lists.length === 1) return lists[0];
  let ans = lists[0];
  for (let i = 1; i < lists.length; i++) {
    const head = new ListNode(0, null);
    let node1 = ans;
    let node2 = lists[i];
    let cur = head;
    while (node1 && node2) {
      if (node1.val < node2.val) {
        cur.next = node1;
        cur = node1;
        node1 = node1.next;
      } else {
        cur.next = node2;
        cur = node2;
        node2 = node2.next;
      }
    }
    cur.next = node1 ? node1 : node2;
    ans = head.next;
  }
  return ans;
};
