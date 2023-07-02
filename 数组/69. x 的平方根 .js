/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let i = 1, j = x >> 1;
    while (i <= j) {
        let middle = (i + j) >> 1;
        if (middle * middle > x) {
            j = middle - 1;
        } else if (middle * middle < x) {
            i = middle + 1;
        } else {
            return middle;
        }
    }
    return j;
};
console.log(3 ** 0.5);