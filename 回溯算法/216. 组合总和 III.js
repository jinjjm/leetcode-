/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let path = [],
        result = [];

    const backtrucking = function (nums, used) {
        if (path.length === nums.length) {
            result.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;

            path.push(nums[i]);
            backtrucking(nums, used);
            path.pop();
            used[i] = false;
        }
    };

    backtrucking(nums, []);
    return result;
};