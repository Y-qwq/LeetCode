/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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
// @lc code=end

