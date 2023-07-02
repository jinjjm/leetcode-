/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left <= right) {
        var middle = (right + left) >> 1;
        if (target < nums[middle])
            right = middle-1;
        else if(target > nums[middle])
            left = middle+1;
        else
            return middle;
    }
    return -1;
};