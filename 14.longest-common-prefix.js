/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.36%)
 * Total Accepted:    45.3K
 * Total Submissions: 144.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0 || strs[0] == '') {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let k = prefix.length; k > 0; k--) {
            if (prefix.substring(0, k) == strs[i].substring(0, k)) {
                prefix = prefix.substring(0, k);
                break;
            } else {
                prefix = prefix.substring(0, k - 1);
            }
        }
        if (prefix.length == 0) {
            return '';
        }
    }
    return prefix;
};