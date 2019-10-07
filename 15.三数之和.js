/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (i == 0 || nums[i] > nums[i - 1]) {
            var left = i + 1;
            var right = nums.length - 1;
            while (left < right) {
                var s = nums[i] + nums[left] + nums[right];
                if (s == 0) {
                    res.push([nums[i], nums[left++], nums[right--]]);
                    while (nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else if (s > 0) {
                    right--;
                    while (nums[right] == nums[right + 1]) {
                        right--;
                    }
                } else {
                    left++;
                    while (nums[left] == nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
    }
    return res;
};
// @lc code=end