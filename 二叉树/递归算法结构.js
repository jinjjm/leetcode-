function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = val == undefined ? null : left;
  this.right = val == undefined ? null : right;
}

var bianli = function(root){
    let res = [];
    const qianxu=function(root){
        if(root == null) return;
        res.push(root.val);
        // 左子树
        qianxu(root.left);
        // 右子树
        qianxu(root.right);
    }
    const zhongxu=function(root){
        if(root==null) return ;
        zhongxu(root.left);
        res.push(root.val);
        zhongxu(root.right);
    }
    const houxu=function(root){
        if(root==null) return ;
        houxu(root.left);
        houxu(root.right);
        res.push(root.val);
    }
    //只使用一个参数 使用闭包进行存储结果???
    qianxu(root);
    zhongxu(root);
    houxu(root);
    return res;
    // 闭包
    // 第一，闭包是一个函数，而且存在于另一个函数当中
    // 第二，闭包可以访问到父级函数的变量，且该变量不会销毁
    // 闭包的实现原理，其实是利用了作用域链的特性
    // 作用1：隐藏变量，避免全局污染
    // 作用2：可以读取函数内部的变量
    // 同时闭包使用不当，优点就变成了缺点：
    // 缺点1：导致变量不会被垃圾回收机制回收，造成内存消耗
    // 缺点2：不恰当的使用闭包可能会造成内存泄漏的问题
}