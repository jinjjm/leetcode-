/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-01 10:47:51
 * @LastEditTime: 2023-08-01 11:07:14
 * @FilePath: \front\算法\贪心算法\53. 最大子数组和.js
 */
/**
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = -Number.MAX_VALUE
    let temp = 0
    // console.log(sum)
    for(let i of nums){
        temp += i
        if(temp>sum){
            sum = temp
        }
        if(temp<=0) temp = 0
    }
    return sum
};