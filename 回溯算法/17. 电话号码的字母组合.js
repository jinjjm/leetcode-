/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-31 21:42:47
 * @LastEditTime: 2023-07-31 21:56:45
 /
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let len = digits.length;
    if(!len) return [];
    if(len===1) return map[digits].split('')
    let result = [],path=[];
    backtracking(digits,len,0)

    function backtracking(n,len,a){
        if(path.length === len){
            // 将path数组的内容合并成字符串
            result.push(path.join(''))
            return;
        }
        for(let e of map[n[a]]){
            path.push(e)
            backtracking(n,len,a+1)
            path.pop()
        }
    }
    return result
    
};