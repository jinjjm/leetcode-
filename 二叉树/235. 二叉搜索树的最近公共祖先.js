/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-04 14:06:12
 * @LastEditTime: 2023-07-04 14:18:31
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
    if(p.val>q.val) [p,q] = [q,p]
    const change = function(root){
        if(!root || root === p,root === q) return root
        if(root.val>q.val) {
            return change(root.left)
        }
        if(root.val<p.val) {
            return change(root.right)
        }
        return root

    }
    return change(root)
};
