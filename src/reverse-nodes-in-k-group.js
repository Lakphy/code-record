/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const reverse = (node, k) => {
    let cur = node;
    const arr = [];
    for (let i = 0; i < k; i++) {
      if (!cur) return [node, null];
      arr.splice(0, 0, cur);
      cur = cur.next;
    }
    for (let i = 1; i < k; i++) {
      arr[i - 1].next = arr[i];
    }
    arr[k - 1].next = cur;
    return [arr[0], arr[k - 1]];
  };
  let curBegin = head;
  let preEnd = null;
  let h = null;
  while (1) {
    const [begin, end] = reverse(curBegin, k);
    if (!h) h = begin;
    if (preEnd) preEnd.next = begin;
    preEnd = end;
    if (!preEnd) return h;
    curBegin = preEnd.next;
  }
};
