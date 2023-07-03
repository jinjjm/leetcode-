/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 20:55:58
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
 * @return {number[]}
 */
var findMode = function (root) {
    let count = 0, max = 1;
    let pre = root;
    let res = [];
    const change = function (root) {
        if (!root) return null;
        change(root.left)
        if (pre.val === root.val) {
            count++;
        }
        else {
            count = 1;
        }
        pre = root;
        if (max === count) {
            res.push(root.val)
        } else if (count > max) {
            res = [];
            max = count;
            res.push(root.val)
        }
        change(root.right)
    }
    change(root)
    return res;
};