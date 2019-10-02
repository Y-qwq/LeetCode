/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 * 将每个字符串排序，排序过后的值当作key存储。
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const group = new Map();
    const res = [];
    strs.forEach(item => {
        const key = item.split("").sort().join("");
        if (!group.has(key)) {
            group.set(key, [item]);
        } else {
            group.get(key).push(item);
        }
    })

    group.forEach(g => {
        res.push(g);
    })

    return res;
};