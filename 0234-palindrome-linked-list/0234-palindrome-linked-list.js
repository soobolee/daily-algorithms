/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head.next) {
        return true;
    }
    let beforeStr = "";
    let afterStr = "";
    let slow = head;
    let fast = head;

    while (slow) {
        if (fast && fast.next) {
            beforeStr += slow.val;
            fast = fast.next.next;
        } else {
            afterStr += slow.val;
        }
        slow = slow.next;
    }

    if (beforeStr.length < afterStr.length) {
        afterStr = Array.from(afterStr);
        afterStr.shift();
        afterStr = afterStr.join("");
    }

    return Array.from(afterStr).reverse().join("") === beforeStr;
};