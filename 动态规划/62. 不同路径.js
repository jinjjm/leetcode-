/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-28 13:40:34
 * @LastEditTime: 2023-08-28 14:54:46
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m+1).fill().map(() => Array(n+1).fill(1));
    console.log(dp)
    // dp[i][j] 表示到ij有多少条路
    // 初始化
    // for (let i = 1; i <= m; i++) dp[i][1] = 1;
    // for (let i = 1; i <= n; i++) dp[1][i] = 1;
    // 状态转移公式
    // dp[i][j] = dp[i][j-1]+dp[i-1][j]
    for (let i = 2; i <= m; i++) {
        for (let j = 2; j <= n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[m][n]
};
