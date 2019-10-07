/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let rs = null;
    let diff = Infinity; // 结果和target的差值

    nums.forEach((num, idx) => {
        let start = idx + 1;
        let end = nums.length - 1;

        while (start < end) {
            let tempRs = num + nums[start] + nums[end];
            let tempDiff = tempRs - target;

            if (Math.abs(tempDiff) < diff) {
                rs = tempRs;
                diff = Math.abs(tempDiff);
            }

            if (tempDiff > 0) {
                end--;
            } else if (tempDiff < 0) {
                start++;
            } else {
                start = end;
            }
        }

    });
    return rs;
};
// @lc code=end