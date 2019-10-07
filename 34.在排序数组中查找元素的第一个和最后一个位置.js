/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 * 要求复杂度log(n) 二分法
 * 
 */
/**
 * 特征：顺序结构、时间复杂度 O(log n)——分治算法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1];
    if (nums.length === 0) return res;
    search(0, nums.length - 1);

    function search(l, r) {
        const middle = getMiddle(l, r);
        // 当查找到目标值时，从index左右扩散查找
        if (nums[middle] === target) {
            let start = middle;
            let end = middle;
            while (nums[start] === target) {
                start--;
            }
            while (nums[end] === target) {
                end++;
            }
            res = [++start, --end];
            return;
        }

        if (nums[middle] > target) {
            // 处理由于取整造成的的当r===getMiddle(l,r)时的情况
            r = r === middle ? r - 1 : middle;
        } else {
            l = l === middle ? l + 1 : middle;
        }
        // 为查找到目标值时跳出递归
        if (l >= r && nums[l] !== nums[r]) return;

        return search(l, r);
    }

    function getMiddle(l, r) {
        return ~~((l + r) / 2);
    }

    return res;
};