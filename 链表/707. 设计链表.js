class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function () {
    this.head = null;
    this.val = null;
    this.size = 0;
};


/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    console.log('get index: ',index)
    //判断index有效性
    if (index < 0 || index >= this.size)
        return -1;
    //定义一个虚拟头节点，他的下一个是原链表的头节点
    const dummyHead = new ListNode(-1, this.head);
    let current = dummyHead.next;
    while (index) {
        current = current.next;
        index--;//很细腻
    }
    console.log('get: ',current.val)
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

    //定义一个虚拟头节点，他的下一个是原链表的头节点
    const dummyHead = new ListNode(-1, this.head);

    //定义新节点
    const newNode = new ListNode(val, null);
    newNode.next = dummyHead.next;
    dummyHead.next = newNode;
    this.head = newNode;
    this.size++;
    console.log('addAtHead: ',this.head)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    //定义一个虚拟头节点，他的下一个是原链表的头节点
    const dummyHead = new ListNode(-1, this.head);
    //定义新节点
    const newNode = new ListNode(val, null);
    if (this.size == 0) {
        this.head = newNode;
        this.size++;
        console.log('addAtTail: ', this.head)
        return;
    }
    let current = dummyHead;//很细腻，要插入尾节点，必须找到当前的尾节点，但可能存在当前链表为空的情况
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
    this.size++;
    console.log('addAtTail: ', this.head)


};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    if (index > this.size)
        return;
    //定义一个虚拟头节点，他的下一个是原链表的头节点
    const dummyHead = new ListNode(-1, this.head);
    //定义新节点
    const newNode = new ListNode(val, null);
    let current = dummyHead;//很细腻
    while (index) {
        current = current.next;
        index--;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    console.log('addAtIndex: ', this.head)

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // console.log('deleteAtIndex: ', this.head)
    if (index < 0 || index >= this.size) return;
    if (index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    //定义一个虚拟头节点，他的下一个是原链表的头节点
    const dummyHead = new ListNode(-1, this.head);
    let current = dummyHead;//很细腻
    while (index) {
        current = current.next;
        index--;
    }
    current.next = current.next.next;
    this.size--;
    console.log('deleteAtIndex: ', this.head)
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */