/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) return null;
    //判断是否有环
    let slow = head, fast = head;
    let indexstart = head;
    let indexend = null;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            indexend = slow;
            // console.log('indexend: ', indexend.val);
            // console.log('slow: ', slow.val);
            break;
        }
    }
    //有环，寻找环的起点
    if (indexend) {
        while(indexstart != indexend) {
            indexstart = indexstart.next;
            indexend = indexend.next;
        }
        // console.log('indexstart: ', indexstart.val);
        return indexstart;
    } else {
        return null;
    }

};