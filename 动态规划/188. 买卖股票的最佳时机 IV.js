/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let len = prices.length;
  // 动态规划1.0
  let arr = new Array(len).fill().map(() => new Array(2 * k + 1).fill(0));
  // 初始化
  for (let i = 0; i < 2 * k; i++) {
    if (i % 2) arr[0][i] = -prices[0];
    else arr[0][i] = 0;
  }
  console.log(arr);
  // 状态转移方程
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < 2 * k + 1; j++) {
      if (j % 2)
        arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1] - prices[i]);
      else arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1] + prices[i]);
    }
  }
  console.log(arr);
  return arr[len - 1][2 * k];
};

var maxProfit = function (k, prices) {
  // 优化数组空间
  let dp = new Array(2 * k + 1).fill(0);
  for (let i = 0; i < 2 * k + 1; i++) {
    dp[i] = i % 2 ? -prices[0] : 0;
  }
  console.log(dp);
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k + 1; j++) {
      dp[j] =
        j % 2
          ? Math.max(dp[j], dp[j - 1] - prices[i])
          : Math.max(dp[j], dp[j - 1] + prices[i]);
    }
  }
  console.log(dp);
  return dp[2 * k];
};
