var removeDuplicates = function (nums) {
    let i = 1, j = 1;
    let temp = nums[0];
    while (j < nums.length) {
        if (temp == nums[j]) {
            j++;
        } else {
            nums[i] = nums[j];
            i++;
            j++;
        }
    }
    return i+1;
};
console.log(removeDuplicates([1,1,2]))