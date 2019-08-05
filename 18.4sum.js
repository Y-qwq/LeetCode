/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (33.14%)
 * Total Accepted:    11K
 * Total Submissions: 33.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    var i = 0;
    var arr = [];
    while (i < nums.length - 3) {
        var j = i + 1;
        while (j < nums.length - 2) {
            var k = j + 1,
                m = nums.length - 1;
            while (k < m) {
                var sum = nums[i] + nums[j] + nums[k] + nums[m];
                if (sum == target) {
                    arr.push([nums[i], nums[j], nums[k], nums[m]]);
                    k++;
                    m--;
                    //去重
                    while (k < m && nums[k - 1] == nums[k]) {
                        k++;
                    }
                    while (k < m && nums[m + 1] == nums[m]) {
                        m--
                    }
                } else if (sum > target) {
                    m--;
                } else {
                    k++
                }
            }
            j++;
            while (j < nums.length - 2 && nums[j - 1] == nums[j]) {
                j++;
            }
        }
        i++;
        while (i < nums.length - 3 && nums[i - 1] == nums[i]) {
            i++;
        }
    }
    return arr;
};
//console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4))