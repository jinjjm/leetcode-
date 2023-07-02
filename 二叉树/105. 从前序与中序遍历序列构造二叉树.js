/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-02 19:22:16
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.lenght) return null;
    let rootVal = preorder.shift();
    let rootIndex = inorder.indexOf(rootVal);
    let root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(0,rootIndex),inorder.slice(0,rootIndex));
    root.right = buildTree(preorder.slice(rootIndex),inorder.slice(rootIndex+1));
    return root;
};