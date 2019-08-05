/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (19.48%)
 * Total Accepted:    30.9K
 * Total Submissions: 158.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
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
}