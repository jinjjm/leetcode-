// 使用高阶函数实现过程抽象
function once(fn){
    return function(...args){
        if(fn){
            const ret = fn.apply(this,args);
            fn = null;
            return ret;
        }
    }
}
// 为了能够让只执行一次的需求覆盖不同的事件处理，将需求剥离出来，这个过程就是过程抽象