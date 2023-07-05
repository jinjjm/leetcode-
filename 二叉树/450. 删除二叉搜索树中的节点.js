/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-05 20:51:56
 * @LastEditTime: 2023-07-05 21:19:35
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null;
    if (root.val === key) {
        //2、有，但没有孩子
        if (!root.left && !root.right) return null;
        //3、4 左右孩子只有一个
        if(root.left&&!root.right) return root.left
        if(root.right&&!root.left) return root.right
        //5、左右都有，左边当孩子，把右边放在左边的最右边
        const right_node = function(node,ri){
            if(node.right) node.right =  right_node(node.right,ri);
            else{
                node.right = ri;
            }
            return node
        }
        root.left = right_node(root.left,root.right);
        root.right = null;
        console.log(root.left)
        return root.left;
    }
    if (root.val > key) root.left = deleteNode(root.left,key)
    if (root.val < key) root.right =  deleteNode(root.right,key)
    // 没有该节点
    return root;
};
