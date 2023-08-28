/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-27 16:36:13
 * @LastEditTime: 2023-08-27 16:46:00
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 方法一：贪心
    // 只要覆盖范围大于数组长度即可
    // for循环前进根据temp的数值。
    默认可以走到第一个位置，因此初始值可以设置为nums[0]
    if(nums.length<=1) return true
    let temp=nums[0];
    for(let i=1;i<=temp;i++){
        temp = Math.max(temp,i+nums[i])
        if(temp>=nums.length-1) return true
    }
    return false;
};
console.log(canJump([0]))