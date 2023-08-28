/**
 * 第二题
 */
// n=3 m=3
let arr = [
  ["red", "blue", "blue"],
  ["red", "blue", "blue"],
  ["green", "green", "green"],
];
let x1 = 1,
  y1 = 2,
  x2 = 2,
  y2 = 3;
function fun(arr, x1, y1, x2, y2) {
  let set = new Set();
  for (let i = x1 - 1; i <= x2 - 1; i++) {
    for (let j = y1 - 1; j <= y2 - 1; j++) {
      set.add(arr[i][j]);
    }
  }
  return set.size;
}
// console.log(fun(arr,2,1,3,2))
console.log(fun(arr,1,2,2,3))

// 第三题

