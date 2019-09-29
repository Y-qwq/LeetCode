/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let length = matrix.length;
    let count = Math.ceil(length / 2);
    length--;
    for (let i = 0; i < count; i++) {
        for (let j = i; j < length - i; j++) {
            [matrix[i][j], matrix[j][length - i]] = [matrix[j][length - i], matrix[i][j]];
            [matrix[i][j], matrix[length - i][length - j]] = [matrix[length - i][length - j], matrix[i][j]];
            [matrix[i][j], matrix[length - j][i]] = [matrix[length - j][i], matrix[i][j]];
        }
    }
    return matrix;
};