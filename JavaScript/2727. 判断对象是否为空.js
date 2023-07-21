/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-20 15:29:44
 * @LastEditTime: 2023-07-20 15:32:47
 */
/**
 * 1、for in 遍历数组和对象
 * 2、Object.keys() 将对象属性转换为数组，利用长度进行判断
 * 举例：
    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
    };
    console.log(Object.keys(object1));
    // Expected output: Array ["a", "b", "c"]
    const arr = ['aaa','bbb','ccc']
    console.log(Object.keys(arr));
    // Expected output: Array ["0", "1", "2"]
 * 
 */
// 给定一个对象或数组，判断它是否为空。
// 一个空对象不包含任何键值对。
// 一个空数组不包含任何元素。
// 你可以假设对象或数组是通过 JSON.parse 解析得到的。
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for(let o in obj){
        return false
    }
    return true
};
