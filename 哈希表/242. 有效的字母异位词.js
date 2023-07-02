/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    // 定义一个字母表数组，用来存放每个字母出现的次数
    let arrayABC = new Array(26).fill(0);
    let i=0;
    let found = 'a'.charCodeAt('a');
    for(i=0;i<s.length;i++){
        arrayABC[s[i].charCodeAt('a')-found]++;
    }
    for(i=0;i<t.length;i++){
        arrayABC[t[i].charCodeAt('a')-found]--;
    }
    for(i=0;i<arrayABC.length;i++){
        if(arrayABC[i] != 0)
            return false;
    }
    return true;
};