/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    } else {
        let res = null;
        nums.some((i, index) => {
            if (i > target) {
                res = index;
                return true;
            };
        })
        if (res) {
            return res;
        } else {
            return res === 0 ? 0 : nums.length
        }
    }
};