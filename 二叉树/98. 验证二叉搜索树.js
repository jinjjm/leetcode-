/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 20:26:46
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
 * 递归迭代，设置一个pre为前一个结点，用来辅助判断，前一个节点均小于后一个结点的特性
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let pre = null;
    const chage = function (root) {
        if (!root) return true
        let left = chage(root.left);
        if (pre != null && pre.val >= root.val) return false;
        else pre = root;
        let right = chage(root.right)
        return left && right
    }
    return chage(root)
};
