/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 从后往前遍历，遇到0则设置flag=1，flag代表需要跳过的数量.
 * 若下一位数不大于flag，则该数无法跳过该0，flag++，如果能跳过，则flag归0.
 * 至于在寻找能跳过时出现的0，即flag!=0时，nums[i]==0,既然能够跳过考后的0，中间出现的必然也能跳过。例如：[4,0,0,1]，能跳过靠右的0，必然就能跳过靠左的0
 * 遍历完毕，flag不为0，则答案位false
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) return true;
    res = false;
    flag = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (flag !== 0) {
            // 若能跳过0，flag回零
            if (nums[i] > flag) {
                flag = 0;
            } else {
                flag++;
                if (i === 0) res = false;
            }
        } else {
            if (nums[i] === 0) flag = 1;
        }
    }
    if (flag === 0) res = true;
    return res;
};
// @lc code=end