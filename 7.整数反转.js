/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < 0) {
        let s = x.toString().split('');
        s.shift();
        s = s.reverse().join('');
        return parseInt('-' + s) < Math.pow(-2, 31) ? 0 : parseInt('-' + s)
    } else {
        let s = x.toString().split('').reverse().join('');
        return parseInt(s) > Math.pow(2, 31) - 1 ? 0 : parseInt(s)
    }
};
// @lc code=end