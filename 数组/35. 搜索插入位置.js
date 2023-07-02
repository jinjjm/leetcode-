/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

    // 时间复杂度 O(n)
var searchInsert = function(nums, target) {
    let i=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]>=target)
            break;
    }
    return i;
};
var searchInsert = function (nums, target) {
    // 二分法做查找问题
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = (left + right) >> 1;
        if (nums[middle] > target) {
            right = middle-1;
        } else if (nums[middle] < target) {
            left = middle+1;
        } else {
            return middle;
        }
    }
    return left;

};