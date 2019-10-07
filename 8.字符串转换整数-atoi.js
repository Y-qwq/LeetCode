/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (!str) {
        return 0;
    }
    str = str.trim();
    var reg = new RegExp(/^[+|-]?\d+/g);
    if (!reg.test(str)) {
        return 0;
    }
    var num = str.match(reg)[0];
    var max = Math.pow(2, 31);
    if (num > max - 1) {
        return max - 1;
    } else if (num < -max) {
        return -max;
    }
    return num;
};

// @lc code=end