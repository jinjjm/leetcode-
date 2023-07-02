/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    var head = 0;
    var tail = nums.length - 1;
    var n = nums.length;
    var newnums = new Array(n).fill(0);
    while (head <= tail) {
        var left = nums[head]*nums[head];
        var right = nums[tail]*nums[tail];
        if(left>right){
            newnums[n-1] = left;
            head++;
        }else{
            newnums[n-1] = right;
            tail--;
        }
        n--;
    }
    return newnums;
};