/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 * 动态规划 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            dp.push(new Array(m).fill(1));
        } else {
            dp.push(new Array(m).fill(1, 0, 1));
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1];
};
// @lc code=end