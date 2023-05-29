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
var deleteDuplicates = function (head) {
  if (!head) return head;
  const deleteNode = (father) => {
    father.next = father.next.next;
  };
  let cur = head;
  while (1) {
    if (cur.next === null) break;
    if (cur.val === cur.next.val) {
      deleteNode(cur);
      if (cur.next === null) break;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
