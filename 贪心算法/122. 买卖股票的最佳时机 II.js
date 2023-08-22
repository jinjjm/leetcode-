/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-22 19:06:38
 * @LastEditTime: 2023-08-22 20:28:46
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心取局部最优解--->计算利润数组，取正值加和即可
  if (prices.length === 1) return 0;
  let temp = []; // 利润数组
  for (let i = 1; i < prices.length; i++) {
    temp.push(prices[i] - prices[i - 1]);
  }
  console.log(temp);
  // 局部最优解
  let max = 0;
  for (let p of temp) {
    if (p > 0) max += p;
  }
  return max;
};
// 优化
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};
