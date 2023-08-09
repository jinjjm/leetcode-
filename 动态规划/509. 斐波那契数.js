/**
 * 方法一：递归
 */
var fib = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    return fib(n-1)+fib(n-2)
};

/**
* 方法二：动态规划
*/
var fib = function(n) {
    if(n<2) return n
    let dp = [0,1]
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    console.log(dp)
    return dp[n]
};
// 此题动态规划优化，不必存储整个数组，只需要两个数即可
var fib = function(n) {
    if(n<2) return n
    let dp = [0,1]
    for(let i = 2;i<=n;i++){
        let sum = dp[0]+dp[1]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
};