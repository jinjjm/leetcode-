/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-03 20:15:10
 */
// 二叉搜索树（BST）
// 二叉搜索树（BST，Binary Search Tree），也称二叉排序树或二叉查找树。
// 二叉搜索树：一棵二叉树，可以为空；如果不为空，满足以下性质：

// 非空左子树的所有键值小于其根结点的键值。
// 非空右子树的所有键值大于其根结点的键值。
// 左、右子树都是二叉搜索树。
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
var searchBST = function (root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    if (root.val < val) return searchBST(root.right, val)
    return null;
};