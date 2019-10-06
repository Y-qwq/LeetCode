/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/
 * 一、动态规划
 * 维护一个二维表(dp[l][r])
 * 找到状态转移方程(s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1]))
 * 转移方程详解：
 * l、r是子字符串的左右位置
 * 
 * 当字串长度为1时，必为回文，即r = l时，此时s[l]=s[r]也成立
 * 当字串长度为2或3 (r-1=1或者2)，s[l]=s[r]时，必然是回文
 * 综上推出 s[l] === s[r] && (r - l <= 2)时，必然是回文
 * 以上是对于长度小于或者等于3的回文判断
 * 
 * 大于3时，则可以判断ds[l] === s[r] && dp[l + 1][r - 1]是否为回文判断
 * 即子串左右字母相同，再查表判断 子串往里缩一格(裁头去尾)的子子串是否为回文，即可判断该子串。例如：aa是回文 则 baab必然是回文
 * 综上可得状态转移方程(s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1]))
 * 
 * 二、中心扩散法
 * 遍历每一个索引，以这个索引为中心，利用“回文串”中心对称的特点，往两边扩散，看最多能扩散多远。要注意一个细节：回文串的长度可能是奇数，也可能是偶数。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 动态规划法
// var longestPalindrome = function (s) {
//     if (s.length < 1) return s;
//     let longestPalindrome = 1;
//     let longestPalindromeStr = s.slice(0, 1);
//     const dp = new Array(s.length);
//     // 不能用fill，fill对于对象是传入同一个对象的引用地址
//     for (let i = 0; i < s.length; i++) {
//         dp[i] = [];
//     }

//     for (let r = 0; r < s.length; r++) {
//         for (let l = 0; l <= r; l++) {
//             if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
//                 dp[l][r] = true;
//                 if (r - l + 1 > longestPalindrome) {
//                     longestPalindrome = r - l + 1;
//                     longestPalindromeStr = s.slice(l, r + 1);
//                 }
//             }
//         }
//     }
//     return longestPalindromeStr;
// };

// 中心扩散法
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    let start = 0,
        end = 0,
        len = 0;
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        s[i] === s[i + 1] && expandAroundCenter(i, i + 1);
    }
    return s.slice(start, end + 1);

    function expandAroundCenter(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        l++;
        r--;
        if (r - l + 1 > len) {
            start = l;
            end = r;
            len = r - l + 1;
        }
    }
}
// @lc code=end