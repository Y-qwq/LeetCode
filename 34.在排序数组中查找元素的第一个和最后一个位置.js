/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
/**
 * 特征：顺序结构、时间复杂度 O(log n)——分治算法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let firstMiddle = getMiddle(nums.length);
    search(firstMiddle);

    function search(middle) {
        // 中间值刚好相等，往左右两边扫描
        if (target === nums[middle]) {
            let lTemp = middle;
            let rTemp = middle;
            // 左
            while (nums[lTemp] === target) {
                lTemp--;
            }
            // 右
            while (nums[rTemp] === target) {
                rTemp++
            }
            console.log([lTemp + 1, rTemp - 1])
            return 'qunimaye';
        }

        let nextMiddle = getMiddle(middle)
        if (nextMiddle === 0) return [-1, -1];

        if (target > nums[middle]) {
            search(nextMiddle + middle);
        } else {
            search(nextMiddle);
        }

    }
};

function getMiddle(number) {
    return Math.floor(number / 2);
}