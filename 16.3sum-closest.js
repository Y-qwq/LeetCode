/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (37.83%)
 * Total Accepted:    14.6K
 * Total Submissions: 38.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
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
console.log(threeSumClosest([0, 1, 2], 3))