/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergeList = new Array();
    let i = 0,
        j = 0,
        k = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergeList[k++] = nums1[i++];
        } else {
            mergeList[k++] = nums2[j++];
        }
    }
    while (i < nums1.length) {
        mergeList[k++] = nums1[i++];
    }
    while (j < nums2.length) {
        mergeList[k++] = nums2[j++];
    }
    if (k % 2 === 0) {
        return (mergeList[Math.floor(k / 2) - 1] + mergeList[Math.floor(k / 2)]) / 2.0;
    } else {
        return mergeList[Math.floor(k / 2)]
    }
};
// @lc code=end

