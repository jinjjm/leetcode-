/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-05 21:20:42
 * @LastEditTime: 2023-07-09 20:21:41
 */
/**
 * 分析--第一轮
 * 修剪--按照一定条件删除节点，删除节点规则入下
 * 1、没有找到该节点---无变化
 * 2、找到的节点为叶子节点--删除即可
 * 3、找的节点只有一个邻接孩子节点，把他替换到该节点上
 * 4、左右节点都有，保留左孩子节点，右孩子节点加到左孩子最左边的节点
 * 分析优化：
 * 方法太复杂
 */
var trimBST = function(root, low, high) {
    if(root===null) return null;
    if(root.val<low) return trimBST(root.right,low,high);
    if(root.val>high) return trimBST(root.left,low,high);
    root.left = trimBST(root.left,low,high);
    root.right = trimBST(root.right,low,high);
    return root;
};