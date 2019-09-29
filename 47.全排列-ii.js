/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort();
    const res = [];
    const length = nums.length;
    handle([], nums);

    function handle(left, right) {
        if (length === left.length) {
            res.push(left);
            return;
        }

        for (let index = 0; index < right.length; index++) {
            const item = right[index];
            if (item === right[index - 1]) continue;
            let r = Object.assign([], right);
            r.splice(index, 1);
            handle(left.concat(item), r);
        }
    }
    return res;
};