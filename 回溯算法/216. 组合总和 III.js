/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = []
    let path = []
    const handler = (n, k, startIndex) => {
        // 终止条件
        if (path.length === k) {
            let sum = 0
            for (let p of path) {
                sum += p;
            }
            if (sum === n) {
                result.push([...path])
                return;
            }else{
                return
            }
            
        }

        // 循环递归
        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            handler(n, k, i + 1);
            path.pop();
        }
    }
    handler(n, k, 1)
    return result
};