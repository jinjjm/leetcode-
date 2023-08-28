/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-27 17:06:41
 * @LastEditTime: 2023-08-27 17:12:01
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length===1) return 0;
    let temp=nums[0]
    let current_max = 0,step=0
    for(let i=0;i<=temp;i++){
        temp = Math.max(temp,i+nums[i])
        if(i===current_max){
            step++
            current_max = temp
            if(current_max>=nums.length-1) return step;
        }
    }
    return step
    // [0]
};
console.log(jump( [0]))
