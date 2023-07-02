/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // 方法一，暴力求解
  let len = nums.length;
  let newnums = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    let n = 0;
    for (let j = 0; j < len; j++) {
      if (i != j && nums[i] > nums[j]) {
        n++;
      }
    }
    newnums[i] = n;
  }
};
var smallerNumbersThanCurrent2 = function (nums) {
    // 方法二，先排序，排序后在该数字前的就是比它小的
    let newnums = nums.sort();
    return newnums;
};
console.log(smallerNumbersThanCurrent2([8, 1, 2, 2, 3]));
