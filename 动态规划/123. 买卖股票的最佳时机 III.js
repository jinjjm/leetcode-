/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 动态规划
  //1、定义dp数组
  let dp = Array(prices.length)
    .fill()
    .map(() => Array(5).fill(0));
  console.log("初始化：", dp);
  //2、初始化
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  dp[0][3] = -prices[0];
  dp[0][4] = 0;
  //3、递推公式-状态转移方程
  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
    dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
    dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);
  }
  console.log("处理完成：", dp);
  return dp[prices.length - 1][4];
};

var maxProfit = function (prices) {
  // 优化版本，节约空间
  const len = prices.length;
  const dp = new Array(5).fill(0);
  dp[1] = -prices[0];
  dp[3] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    dp[2] = Math.max(dp[2], dp[1] + prices[i]);
    dp[3] = Math.max(dp[3], dp[2] - prices[i]);
    dp[4] = Math.max(dp[4], dp[3] + prices[i]);
  }
  return dp[4];
};
