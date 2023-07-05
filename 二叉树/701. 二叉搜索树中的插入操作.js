/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-05 20:42:48
 * @LastEditTime: 2023-07-05 20:51:37
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root){
        return new TreeNode(val);
    }
    if(root.val>=val){
        root.left = insertIntoBST(root.left,val)
    }
    if(root.val<val)  root.right = insertIntoBST(root.right,val); 
    return root
};
