/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var len = Infinity; // 最小长度
  var head = 0;
  var tail = 0;
  var all = nums[0];

  for (; tail < nums.length && head < nums.length; ) {
    if (target > all) {
      head++;
      all += nums[head];
    } else {
      len = len>(head - tail + 1)?(head - tail + 1):len;
      all = all - nums[tail];
      tail++;
    }
  }
  return len;
};
console.log(minSubArrayLen(
    7,
[2,3,1,2,4,3]
));
