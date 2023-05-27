/** 循环法 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1 ? p1.next : headA;
    p2 = p2 ? p2.next : headB;
  }
  return p1;
};

/** 手动判断长度法 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headB || !headA) return null;
  let p1 = headA;
  let p2 = headB;
  let len1 = 0;
  let len2 = 0;
  while (1) {
    if (p1 === null) break;
    p1 = p1.next;
    len1++;
  }
  while (1) {
    if (p2 === null) break;
    p2 = p2.next;
    len2++;
  }
  const check = (a, b, lena, lenb) => {
    let c = lenb - lena;
    while (1) {
      if (c === 0) break;
      if (b === null) return null;
      b = b.next;
      c--;
    }
    for (let i = 0; i < lena; i++) {
      if (a === b) return a;
      else {
        a = a.next;
        b = b.next;
      }
    }
  };
  p1 = headA;
  p2 = headB;
  if (len1 < len2) return check(p1, p2, len1, len2);
  else return check(p2, p1, len2, len1);
};
