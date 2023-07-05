/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 21:08:23
 * @LastEditTime: 2023-07-04 14:03:39
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode} 
 */
var lowestCommonAncestor = function(root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function(root,p,q) {
        // 2. 确定递归终止条件
        if(root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑
        let left = travelTree(root.left,p,q);
        let right = travelTree(root.right,p,q);
        if(left !== null && right !== null) {
            return root;
        }
        if(left === null) {
            return right;
        }
        return left;
    }
   return  travelTree(root,p,q);
};