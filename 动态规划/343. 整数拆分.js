/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-08-28 15:16:10
 * @LastEditTime: 2023-08-28 15:38:55
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 方法一：乘积最大的一定是几个数最接近的时候
    if(n===2) return 1;
    if(n===3) return 2;
    let k=2;
    let num = 1;
    while(n/k>=2){
        let yu = n%k
        let avg = parseInt(n/k)
        let ji = avg**(k-yu)*(avg+1)**yu
        if(ji>num) num=ji
        k++;
    }
    return num
    // 方法二：上述方式有一个推论，将一个数拆分成无数个3相乘，是最大的
    
};
