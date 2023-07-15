/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-15 21:27:30
 * @LastEditTime: 2023-07-15 21:34:53
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 排序
    g = g.sort((a,b)=>a-b)
    s = s.sort((a,b)=>a-b)
    // 将大饼干分给大胃口
    let sum = 0;
    let sindex = s.length-1;
    for(let i = g.length-1;i>=0;i--){
        if(sindex>=0&&s[sindex]>=g[i]){
            sum++;
            sindex--;
        }
    }
    return sum;
};