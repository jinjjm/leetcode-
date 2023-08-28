//
// 第四题
//
function fun() {
  let p = 2,//
    n = 5,
    m = 3;

  let a = [-1, -2, 3, 4, 5],
    b = [-1, 3, 4, 2, 5];
    
  // 先排序
  a = a.sort();
  b = b.sort();
  console.log(a, b);
  let i = 0,
    j = b.length - 1;
  // 首加尾判断大于1小于m
  while (i < a.length) {
    if (a[i] + b[j] > m || a[i] + b[j] < 1) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
let b = fun();
console.log(b);
