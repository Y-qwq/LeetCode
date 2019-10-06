/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 滑窗算法。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        // 如过存在重复字符，删除set的首字符（即s[i-set.size]）
        // 不用array而用set的目的是因为Array.prototype.indexOf的复杂度是O(n)，而Set的has复杂度是O(1).
        if (set.has(item)) {
            set.delete(s[i - set.size]);
            // i--目的是为了原地再次判断是否已经删除掉了重复字符
            i--;
        } else {
            set.add(item);
        }
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};
// @lc code=end