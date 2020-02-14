/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 * 碰壁转向，先填充0，用undefined与0区别是否碰壁
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const res = [];
    // 填充0
    for (let i = 0; i < n; i++) {
        const t = [];
        t.length = n;
        res.push(t.fill(0));
    }

    let row = 0,
        col = 0,
        direction = "top";
    for (let i = 1; i <= n * n; i++) {
        res[row][col] = i;

        if (direction === "top") {
            if (res[row][++col] !== 0) {
                col--;
                row++;
                direction = "right"
            }
        } else if (direction === "right") {
            if (res[++row] === undefined || res[row][col] !== 0) {
                row--;
                col--;
                direction = "bottom";
            }
        } else if (direction === "bottom") {
            if (res[row][--col] !== 0) {
                col++;
                row--;
                direction = "left";
            }
        } else if (direction === "left") {
            if (res[--row] === undefined || res[row][col] !== 0) {
                row++;
                col++;
                direction = "top";
            }
        }
    }
    return res;
};
// @lc code=end