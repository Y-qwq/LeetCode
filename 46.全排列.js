/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    const length = nums.length;
    handle([], nums);

    function handle(left, right) {
        if (length === left.length) {
            res.push(left);
            return;
        }

        right.forEach((item, index) => {
            let r = Object.assign([], right);
            r.splice(index, 1);
            handle(left.concat(item), r);
        })
    }
    return res;
};
