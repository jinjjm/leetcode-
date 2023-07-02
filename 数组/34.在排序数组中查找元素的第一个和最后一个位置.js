/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** 双指针暴力求解，时间复杂度O(n)不满足条件 */
// 使用二分法

var searchRange = function (nums, target) {
  // 查找左边界
  const searchLeft = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let middle = (left + right) >> 1;
      if (nums[middle] >= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return right;
  };
  // 查找右边界
  const searchRight = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let middle = (left + right) >> 1;
      if (nums[middle] <= target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return left;
  };
  console.log(searchLeft(nums, target));
  console.log(searchRight(nums, target));
  //分情况讨论
  let left = searchLeft(nums, target);
  let right = searchRight(nums, target);

  if (right - left > 1) return [left + 1, right - 1];
  else if (right - left == 1) return [-1, -1];
  else return [-1, -1];
};

console.log(searchRange([5,7,7,8,8,10],
    6));
