/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let listNode = l;

  while (listNode) {
    if (listNode.value !== k) {
      listNode = listNode.next;
    } else if (listNode.next) {
      listNode.value = listNode.next.value;
      listNode.next = listNode.next.next;
    } else {
      listNode = null;
    }
  }
  return l;
}

module.exports = removeKFromList;
