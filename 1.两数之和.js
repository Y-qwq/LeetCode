/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 因为答案必然时两位数
 * 所以可以利用map暂存target-nums[i]
 * 再查询map是否存在nums[i], 9-3=6  9-6=3;
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    const len = nums.length - 1;

    for (let i = 0; i <= len; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            const diff = target - nums[i];
            map.set(diff, i);
        }
    }
};
// @lc code=end