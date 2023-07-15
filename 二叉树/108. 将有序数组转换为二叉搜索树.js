/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-09 20:40:31
 * @LastEditTime: 2023-07-09 20:40:40
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
var sortedArrayToBST = function (nums) {

    const create = function (nums, l, r) {
        if (nums.length === 0||r-l<0) return null;
        if(r-l === 0) return new TreeNode(nums[l]);
        let middle = (l + r+1) >> 1;
        // console.log(middle)
        let root = new TreeNode(nums[middle]);
        root.left = create(nums, l, middle - 1);
        root.right = create(nums, middle + 1, r);
        return root;
    }
    return create(nums, 0, nums.length-1)
};