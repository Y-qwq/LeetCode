/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (67.61%)
 * Total Accepted:    13.7K
 * Total Submissions: 20.2K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     // 问题转移方程
//     // dp[n] = (dp[n-1])dp[0], (dp[n-2])dp[1], (dp[n-3])dp[2] .....
//     const dp = [[''], ['()']];
//     const generate = n => {
//         if(dp[n]) return dp[n];
//         const result = [];
//         for (const key of Array(n).fill().keys()) {
//             const left = generate(n - key - 1)
//                 .map(item => `(${item})`);
//             const current = generate(key)
//                 .map(right => left.map(leftPart => {
//                     result.push(`${leftPart}${right}`)
//                 }));
//         }
//         dp[n] = result;
//         return result;
//     }

//     return generate(n);
// };

var generateParenthesis = function(n) {
    let res = [];
    singleStr("", 0, 0, n,res);
    return res;
  };
  
  function singleStr(s, left, right, n,res) {
    if (left == n && right == n) {
      res.push(s);
    }
    if (left < n) {
      singleStr(s + "(", left + 1, right, n,res);
    }
    if (right < left) {
      singleStr(s + ")", left, right + 1, n,res);
    }
  }

/**
 * ####以Generate Parentheses为例，backtrack的题到底该怎么去思考？

所谓Backtracking都是这样的思路：在当前局面下，你有若干种选择。那么尝试每一种选择。如果已经发现某种选择肯定不行（因为违反了某些限定条件），就返回；如果某种选择试到最后发现是正确解，就将其加入解集

所以思考递归题时，只要明确三点就行：选择 (Options)，限制 (Restraints)，结束条件 (Termination)。即“ORT原则”（这个是我自己编的）

对于这道题，在任何时刻，你都有两种选择：

加左括号。 加右括号。 同时有以下限制：

如果左括号已经用完了，则不能再加左括号了。 如果已经出现的右括号和左括号一样多，则不能再加右括号了。因为那样的话新加入的右括号一定无法匹配。 结束条件是： 左右括号都已经用完。

结束后的正确性： 左右括号用完以后，一定是正确解。因为

左右括号一样多
每个右括号都一定有与之配对的左括号。因此一旦结束就可以加入解集（有时也可能出现结束以后不一定是正确解的情况，这时要多一步判断）。
递归函数传入参数： 限制和结束条件中有“用完”和“一样多”字样，因此你需要知道左右括号的数目。 当然你还需要知道当前局面sublist和解集res。
 */