/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 动态规划
 * dp[n] = dp[n-1] + dp[n-2]
 * 即dpn = dpn_1 + dpn
 */
var climbStairs = function (n) {
    if (n <= 3) return n;
    let dpn_1 = 1,
        dpn = 2,
        temp = 0;

    for (let i = 3; i <= n; i++) {
        temp = dpn;
        dpn = dpn_1 + dpn;
        dpn_1 = temp;
    }

    return dpn;
};
// @lc code=end