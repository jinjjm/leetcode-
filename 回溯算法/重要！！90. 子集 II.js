/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
这种题的套路都是一样的，如果没有重复元素，直接回溯，如果有重复元素，就先排序，再回溯，回溯中，
如果当前元素和上一个元素相同，那么直接continue   
 */
var subsetsWithDup = function (nums) {

    let res = [], path = []
    let nums_sort = nums.sort((a, b) => a - b)
    function backtracking(nums, startIndex) {
        res.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            if(i>startIndex&&nums[i]===nums[i-1]) continue;
            path.push(nums[i])
            backtracking(nums, i + 1)
            path.pop()
        }
    }
    backtracking(nums_sort, 0)
    return res;
};