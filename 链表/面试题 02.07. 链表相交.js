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
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    // 两个链表相交的起始节点，相交后，一定是长度和数值都一样，因此可以先判断长度，
    // 然后让两个链表的末端对其
    let cur1 = headA;
    let cur2 = headB;
    let n1=0,n2=0;
    while(cur1){
        cur1 = cur1.next;
        n1++;
    }
    while(cur2){
        cur2 = cur2.next;
        n2++;
    }
    cur1 = headA;
    cur2 = headB;
    // 令B链表是长的链表
    if(n1 > n2){
        // swap(headA,headB);
        // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [cur1, cur2] = [n2, n1]
        [cur1, cur2] = [cur2, cur1];
        [n1, n2] = [n2, n1];
    }
    let n = n2-n1;
    while(n){
        cur2 = cur2.next;
        n--;
    }
    console.log("cur2: ",cur2);
    while(cur2){
        console.log(cur1.val)
        console.log(cur2.val)
        if(cur2 == cur1){
            return cur1;
        }
        else{
            cur1 = cur1.next;
            cur2 = cur2.next;
        }
    }
    console.log("------: ");
    return null;
    

};