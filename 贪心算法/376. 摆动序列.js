/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-31 22:06:47
 * @LastEditTime: 2023-08-01 10:45:34
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let flag = 0;
    let num = 1;
    let i;
    if(nums[1]-nums[0] > 0){
        flag = 1;
        num++;
    }else if(nums[1]-nums[0]<0){
        flag = -1
        num++;
    }
    for(i=2;i<nums.length;i++){
        let temp = nums[i]-nums[i-1]
        if(flag === 0 && temp===0||temp===0){
            continue;
        }
        if(flag*temp<=0){
            flag = temp;
            num++
        }
    }
    return num;
};
var res = wiggleMaxLength([5,5,5,2,9,5])
console.log(res)