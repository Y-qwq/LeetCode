/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return []
    // 按每个数组第一个数排序
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [];
    let pre = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i];
        // 后一个的第二数大于前一个的第二数时才做操作，否则直接跳过该数组
        if (cur[1] > pre[1]) {
            if (cur[0] <= pre[1]) {
                pre[1] = cur[1];
            } else {
                res.push(pre);
                pre = cur;
            }
        }
    }
    res.push(pre);
    return res;
};
// @lc code=end