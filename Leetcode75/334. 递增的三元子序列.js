/**
 * 很巧妙使用small和middle来表示递增三元组的前两个数
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // 连续的三个数
    // let i=0,j=1;
    // for(let n=1;n<nums.length;n++){
    //     if(nums[n]>nums[n-1]) j++;
    //     else{
    //         i=j;
    //         j=1;
    //     }
    //     if(j===3) return true;
    // }
    // return false
    // 可以不连续的三个
    let small = Number.MAX_VALUE,middle=Number.MAX_VALUE;
    for(let i of nums){
        if(i<=small){
            small = i
        }else if(i<=middle){
            middle = i
        }else{
            return true
        }
    }
    return false;
};