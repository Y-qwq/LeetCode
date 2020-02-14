/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (nums[i - 1] && nums[i - 1] !== 0) {
                nums.splice(i, 1);
                nums.unshift(0);
                i--;
            }
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 2) {
            if (nums[i + 1] && nums[i + 1] !== 2) {
                nums.splice(i, 1);
                nums.push(2);
                i++;
            }
        }
    }
};
// @lc code=end