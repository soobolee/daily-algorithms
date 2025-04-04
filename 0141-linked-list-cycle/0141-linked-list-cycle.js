/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visitedMap = new Set();

    while (true) {
        if (!head || !head.next) {
            return false;
        }
        const key = head;

        if (!visitedMap.has(key)) {
            visitedMap.add(key, "visit");
        } else {
            return true;
        }

        head = head.next;
    }
};