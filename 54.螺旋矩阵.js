/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = [];
    while (matrix.length > 0) {
        let left = [];
        arr.push(...matrix.shift());
        matrix.forEach(a => {
            // 长度大于等于2才将左边数字暂存。
            a[1] !== undefined && left.push(a.shift());
            a[0] !== undefined && arr.push(a.pop());
        });
        matrix.length && arr.push(...matrix.pop().reverse());
        arr.push(...left.reverse());
    }
    return arr;
};
// @lc code=end