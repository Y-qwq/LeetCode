/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
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
// @lc code=end