/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;
  const newHead = new Node(head.val, null, null);
  let cur = head;
  let next = cur.next;
  let newNode = new Node(cur.val, null, null);
  const oldList = [cur];
  const newList = [newNode];
  while (1) {
    cur.next = newNode;
    cur = next;
    if (cur === null) break;
    oldList.push(cur);
    next = cur.next;
    newNode = new Node(cur.val, null, null);
    newList.push(newNode);
  }
  for (let i = 1; i < oldList.length; i++) {
    newList[i - 1].next = newList[i];
    newList[i - 1].random = oldList[i - 1].random && oldList[i - 1].random.next;
  }
  newList[newList.length - 1].random =
    oldList[oldList.length - 1].random &&
    oldList[oldList.length - 1].random.next;
  // console.log(newList);
  for (let i = 1; i < oldList.length; i++) {
    oldList[i - 1].next = oldList[i];
  }
  oldList[oldList.length - 1].next = null;
  // console.log(oldList);
  return newList[0];
};
