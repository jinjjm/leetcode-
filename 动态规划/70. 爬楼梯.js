/**
 * 推理得出 第n层楼梯的方法等于等n-1和n-2层之和
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    let dp = [,1,2]
    for(let i = 3;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
};