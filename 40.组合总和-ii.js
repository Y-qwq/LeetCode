/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 * 一、动态规划
 * 二、回溯
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var dp = []
    //先排序解决顺序问题 例 （1，2）（2，1）
    candidates.sort((a, b) => a - b)
    for (let i = 0; i <= target; i++) {
        dp[i] = new Set()
    }
    dp[0].add('')
    for (let c of candidates) {
        for (let i = target; i >= c; i--) {
            for (item of dp[i - c]) {
                //使用Set去重, 子项要转化成 String
                dp[i].add(item + ',' + c)
            }
        }
    }
    //最后把Set 转成 Array 
    return Array.from(dp[target]).map(item => item.slice(1).split(','))
};
// console.log(combinationSum2([10,1,2,7,6,1,5],8))

// var combinationSum2 = function (candidates, target) {
//     const arr = [];
//     const res = [];
//     candidates.forEach(i => i <= target && arr.push(i));
//     arr.sort((a, b) => a - b);
//     for (let len = 1; len <= arr.length; len++) {
//         handle(target, [], 0, len);
//     }

//     function handle(t, r, index, length) {
//         if (length === 1) {
//             arr.lastIndexOf(t) >= index && res.push(r.concat(t));
//             return;
//         }
//         // 保证同层次不重复执行相同的handle，arr[i]==arr[i+1]时，执行arr[i+1]对应的handle会造成重复
//         let flag = null;
//         for (let i = index; i < arr.length; i++) {
//             if (arr[i] === flag) continue;
//             const diff = t - arr[i];
//             if (diff > 0) {
//                 handle(diff, r.concat(arr[i]), i + 1, length - 1);
//                 flag = arr[i];
//             } else {
//                 return;
//             }
//         }
//     }
//     return res;
// };