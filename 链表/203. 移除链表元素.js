/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // if(head == null) return null;
    // head.next = removeElements(head, val);
    // return head.val == val?head.next:head;
    //设置虚头节点
    const ret = new ListNode(-1, head);
    let cut = ret;
    while (cut.next) {
        if (cut.next.val == val) {
            cut.next = cut.next.next;
        } else
            cut = cut.next;
    }
    return ret.next;
};