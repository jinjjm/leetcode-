/*
 * @Author: jinjjm 1185838762@qq.com
 * @Date: 2023-07-02 17:41:57
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

/**
 * 思路
 * 1、用队列，非子节点进队列，子节点相加，父节点出队列
 * 即--深度优先遍历
 * 优化：改为用目标值减去每次遍历的节点
 *
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  const Sum = function (node, sum) {
    // 左右节点均为空，剩余值为0，即为所求
    if (!node.left && !node.right && sum == 0) return true;

    if (node.left) {
      if (Sum(node.left, sum - node.left.val)) return true;
      // 否则，上一条路走不通，回溯sum，即sum不变
    }
    if (node.right) {
      if (Sum(node.right, sum - node.right.val)) return true;
    }
    return false;
  };
  return Sum(root, targetSum - root.val);
};

