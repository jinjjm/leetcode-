/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-15 20:10:42
 * @LastEditTime: 2023-07-15 20:48:34
 * */
/**
 * 回溯+剪枝优化
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    // 1、定义结果数组+路径数组
    let result = []
    let path = []
    const handler = (n, k, startIndex) => {
        // 2、递归结束判断
        if (path.length === k) {
            result.push([...path])
            return;
        }
        // 3、循环
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            handler(n, k, i + 1)
            path.pop()
        }
    };
    handler(n, k, 1);
    return result;
};