/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-09 20:55:52
 * @LastEditTime: 2023-07-09 20:55:57
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;
    const cal = (cur) => {
        if (!cur) return null;
        cal(cur.right)
        cur.val += sum;
        sum = cur.val;
        cal(cur.left)
    }
    cal(root)
    return root;
};