/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-02 21:24:06
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const myfn = function (nums, left, right) {
        if (right - left < 1) return null;
        // 找最大值--》根节点
        let maxIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[maxIndex] < nums[i]) {
                maxIndex = i;
            }
        }
        //根节点
        let root = new TreeNode(nums[maxIndex]);
        // 根节点以左，为左子树，以右为右子树
        root.left = myfn(nums, left, maxIndex);
        root.right = myfn(nums, maxIndex + 1, right)
        return root;
    }

    return myfn(nums, 0, nums.length);

};