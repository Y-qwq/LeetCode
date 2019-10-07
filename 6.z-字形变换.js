/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 * 利用数组按行排序
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length < numRows || numRows === 1) {
        return s;
    }
    // 每个 N 中间斜杠的数量
    let between = numRows - 2;
    let arr = [];
    let flag = 0;
    // 创建二维数组
    for (let i = 0; i < numRows; i++) {
        arr[i] = "";
    }

    for (let i = 0; i < s.length; i++) {
        if (flag < numRows) {
            arr[flag++] += s[i];
            continue;
        }
        if (flag >= numRows + between) {
            i--;
            flag = 0;
            continue;
        }
        arr[numRows - (++flag - numRows + 1)] += s[i];
    }

    return arr.join("");
};
// @lc code=end