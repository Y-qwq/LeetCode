/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * 递归法
 * 1、预处理数据，先排序
 * 2、递归，下一层查找的index是curArr（临时数组）最后一个数字的index
 * 3、有结果，push进res，无则return
 * 4、最后return结果
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];

    candidates.sort((a, b) => a - b);

    candidates.forEach((item, index) => {
        handleSum([item], item, index);
    })

    function handleSum(curArr, sum, i) {
        if (sum === target) {
            res.push(curArr);
            return;
        }
        // 从curArr的最后一个元素的index开始查找，防止出现[2,2,3],[2,3,2]这些重复性答案
        for (let index = i; index < candidates.length; index++) {
            const item = candidates[index];
            // 当前没结果
            if (item > target - sum) return;
            // 可能有结果，继续加
            handleSum([...curArr, item], sum + item, index);
        }
    }

    return res;
};