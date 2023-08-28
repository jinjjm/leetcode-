/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-28 14:54:58
 * @LastEditTime: 2023-08-28 15:15:26
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length,n=obstacleGrid[0].length
    let dp=new Array(m).fill().map(()=>Array(n).fill(0));
    for(let i=0;i<m&&obstacleGrid[i][0]===0;i++){
        dp[i][0] = 1
    }
    for(let i=0;i<n&&obstacleGrid[0][i]===0;i++){
        dp[0][i] = 1
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(obstacleGrid[i][j]===0){
                dp[i][j] = dp[i][j-1]+dp[i-1][j]
            }
        }
    }
    return dp[m-1][n-1]
};
