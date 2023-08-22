/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[],path=[]
    function backtracking(nums,startIndex){
        res.push([...path])
        for(let i=startIndex;i<nums.length;i++){
            path.push(nums[i])
            backtracking(nums,i+1)
            path.pop()
        }
    }
    backtracking(nums,0)
    return res;
};
