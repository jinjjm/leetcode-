/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 20:42:57
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
 * 1、二叉搜索树都可以转换成中序遍历的有序数组
 * 2、递归，要充分利用二叉搜索树的特点，上一节点数值小于下一节点
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let pre = null;
    let min = Infinity;
    console.log(min)
    const chage = function (root) {
        if (!root) return null;
        chage(root.left);
        if(pre) min = Math.min(min,root.val-pre.val)
        pre = root;
        chage(root.right)
    }
    chage(root)
    return min;
};
