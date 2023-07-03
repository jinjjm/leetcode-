/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 20:05:53
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) return null;
    if (root1 && root2) {
        root1.val = root1.val + root2.val;
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right,root2.right)
    }
    else {
        root1 = root1 ? root1 : root2;
    }
    return root1;
};