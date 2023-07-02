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
var reverseList = function(head) {
    if(head == null) return null;
    if(head.next == null) return head;
    const dummyHead = new ListNode(-1,head);
    let cur = head;
    let pre = head.next;
    while(pre){
        let temp = pre.next;
        pre.next = cur;
        if(head == cur){
            cur.next = null
        }
        cur = pre;
        pre = temp;
    }
    head = cur;
    return head;
};