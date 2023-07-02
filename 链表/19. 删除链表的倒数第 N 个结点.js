/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if(!head.next) {
        head = null;
        return head;
    }
    const newNode = new ListNode(-1, head);
    let cur = newNode;
    let list = [];
    let i=0;
    for (i = 0; cur.next != null; i++, cur = cur.next) {
        list[i] = cur.next;
    }
    console.log(i)
    list[i] = null;
    if(i-n ==0 ){
        head = head.next;
        return head;
    }
    list[i-n-1].next = list[i-n+1];
    return head;
};