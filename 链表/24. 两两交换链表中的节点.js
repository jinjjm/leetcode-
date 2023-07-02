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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    const newNode = new ListNode(-1,head);
    let cur = newNode;
    let pre = cur.next;
    while(pre && pre.next){
        cur.next = pre.next;
        pre.next = pre.next.next;
        cur.next.next = pre;
        cur = pre;
        pre = pre.next;
    }
    return newNode.next;
};

// 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var swapPairs = function (head) {
if (!head.next || !head) return head;
let cur = head;
let pre = head.next;
while(cur){
    cur.next = pre.next;
    pre.next = cur;
    if(cur == head) head = pre;
    cur = cur.next;
    pre = cur.next;
}
return head;
};

console.log(swapPairs([1,2,3,4]))