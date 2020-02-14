/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 将旋转数组恢复正常
    let rLen = 0,
        lLen = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            const left = nums.slice(i);
            const right = nums.slice(0, i);
            nums = left.concat(right);
            rLen = right.length;
            lLen = left.length;
            break;
        }
    }
    // 正常二分法
    const getMiddle = (l, r) => ~~((l + r) / 2);
    const dichotomySearch = (start, end) => {
        if (Math.abs(end - start) <= 1) {
            if (target === nums[start]) {
                return start;
            } else if (target === nums[end]) {
                return end;
            } else {
                return -1;
            }
        }
        const middle = getMiddle(start, end);
        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            return dichotomySearch(start, getMiddle(start, end));
        } else {
            return dichotomySearch(getMiddle(start, end), end);
        }
    }
    
    let res = dichotomySearch(0, nums.length - 1);
    // 因为数组改变了，因此要将得到的index转换为原数组index
    if (res !== -1) {
        if (res < lLen) {
            res += rLen;
        } else {
            res -= lLen;
        }
    }
    return res;

};
// @lc code=end