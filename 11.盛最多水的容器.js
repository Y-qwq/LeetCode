/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 双指针法，指针从两边往中间移动，每次仅移动其中指针所指较小的那边。
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let max = null;
    while (start < end) {
        let area = Math.min(height[start], height[end]) * (end - start);
        max = area > max ? area : max;
        height[start] > height[end] ? end-- : start++;
    }
    return max;
};
// @lc code=end

