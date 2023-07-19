/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-16 19:35:57
 * @LastEditTime: 2023-07-16 19:53:59
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i=0,j=s.length-1;
    let path = /[a-zA-Z0-9]+/;//正则表达式
    while(i<j){
        while(!path.test(s[i])) i++;
        while(!path.test(s[j])) j--;
        if(i>=j) break;
        // console.log(s[i])
        if(s[i].toLowerCase() !== s[j].toLowerCase()){
            // console.log(s[i])
            // console.log(s[j])
            return false
        }
        j--;i++;
    }
    return true;
};