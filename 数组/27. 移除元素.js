/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针
var removeElement = function(nums, val) {
    // num数组，val值
    var head = 0;
    var tail = nums.length-1;
    while(head <= tail){
        if(nums[head] == val){
            nums[head] = nums[tail];
            tail--;
        }else
            head++;
    }

    return tail+1;
};