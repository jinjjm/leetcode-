function TreeNode(val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = val == undefined ? null : left;
  this.right = val == undefined ? null : right;
}
const qianxu = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return res;
};

const zhongxu = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  let cur = null;
  while (stack.length || cur) {
    if (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    } else {
      cur = stack.pop(); // pop()移除顶端元素，并返回该元素
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};
const houxu = function (root, res = []) {
    // 调换先序遍历左右，最后再翻转
  if (!root) return res;
  let stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return res.reverse();

};
