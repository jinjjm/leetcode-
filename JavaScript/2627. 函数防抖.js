/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-20 15:17:54
 * @LastEditTime: 2023-07-20 15:19:13
 */
/**
 * 防抖和节流
 * 节流：为了降低某操作的执行频率而设计的逻辑。所有的操作都会被记录，并且逐个执行。
 * 防抖：为了提高某项反应的触发门槛（例如滚动的距离）。防抖生效期间的操作会被忽略。
 */

// 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。
// 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeId = null;
    return function(...args) {
        if(timeId) clearTimeout(timeId)
        timeId = setTimeout(()=>fn(...args),t);
    }
};


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */