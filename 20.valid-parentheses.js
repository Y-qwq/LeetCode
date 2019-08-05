/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.00%)
 * Total Accepted:    43.5K
 * Total Submissions: 120.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
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