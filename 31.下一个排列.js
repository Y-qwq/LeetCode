/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */
/**
 * 从数组倒着查找，找到nums[i] 比nums[i+1]小的时候，就将nums[i]跟nums[i+1]到nums[nums.length - 1]当中找到一个最小的比nums[i]大的元素交换。交换后，再把nums[i+1]到nums[nums.length-1]排序，就ok了
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length < 2) return;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i - 1] < nums[i]) {
            for (let ii = nums.length - 1; ii >= 0; ii--) {
                if (nums[ii] > nums[i - 1]) {
                    const temp = nums.splice(ii, 1);
                    nums.splice(i - 1, 0, temp);

                    // 从小到大排序i往后的数组
                    let sortArr = nums.splice(i, nums.length - i);
                    sortArr.sort( (a,b) => a-b );
                    nums.push(...sortArr)
                    return
                }
            }
        } else {
            continue;
        }
    }
    nums.sort((a, b) => a - b);
};
