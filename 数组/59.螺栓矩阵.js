/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let quan = n >> 1;
    let i = -1; let j = -1;
    // let len = n;
    let count = 1;
    let s = 0; let x = n; let l = 0; let r = n;
    let nums = new Array(n).fill(n * n).map(() => new Array(n).fill(n*n));
    while (quan--) {
        for (i=i+1,j=j+1; j < r; j++) {
            nums[i][j] = count++;
        }
        s++;
        for(j=j-1,i=i+1;i< x;i++){
            nums[i][j] = count++;
        }
        r--;
        for(i=i-1,j=j-1;j>=l;j--){          
            nums[i][j] = count++;
        }
        x--;
        for(j=j+1,i=i-1;i>=s;i--){
            nums[i][j] = count++;
        }
        l++;
    }
    return nums
};
let n=3;

console.log(generateMatrix(4));
