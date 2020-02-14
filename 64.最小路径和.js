/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 * 动态规划
 * dp[i][j] = grid[i][j] + dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1]
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid[0].length;
    const n = grid.length;
    grid[-1] = new Array(m).fill(Infinity);
    for (let i = 0; i < n; i++) grid[i][-1] = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) continue;
            console.log(i, j)
            const min = Math.min(grid[i - 1][j], grid[i][j - 1]);
            grid[i][j] += min;
        }
    }

    return grid[n - 1][m - 1]
};
// @lc code=end