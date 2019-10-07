/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let pointer = 0;
    let temp = [];
    let flag = true;
    w:
        while (pointer < s.length) {
            let context = s[pointer]
            switch (context) {
                case '{':
                    temp.push('}')
                    break;

                case '(':
                    temp.push(')')
                    break;

                case '[':
                    temp.push(']')
                    break;

                case temp[temp.length - 1]:
                    temp.pop();
                    break;

                default:
                    flag = false;
                    break w;
            }
            pointer++;
        }

    if (temp.length == 0 && flag) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end