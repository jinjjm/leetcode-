/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-02 18:59:51
 * 
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length) return null;
    if(!postorder.length) return null;
    // 新建根节点
    let rootVal = postorder.pop();
    // console.log(rootVal)
    let root = new TreeNode(rootVal);
    // 计算根节点在中序遍历数组的位置
    let rootIndex = inorder.indexOf(rootVal);
    // console.log(rootIndex)
    //建立左右节点
    // 根节点下标是几，后序遍历就取前几个作为左数组
    root.left = buildTree(inorder.slice(0,rootIndex),postorder.slice(0,rootIndex));
    root.right = buildTree(inorder.slice(rootIndex+1),postorder.slice(rootIndex))
    return root;
};