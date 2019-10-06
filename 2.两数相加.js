/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 头节点
    const l3 = new ListNode((l1.val + l2.val) % 10);
    // temp 操纵节点位置
    let temp = l3;
    // 进位
    let carry = ~~((l1.val + l2.val) / 10);
    // 创建一个空节点，避免在while里重复创建浪费内存；
    const emtpy = new ListNode(null);
    next();
    while (l1.val !== null || l2.val !== null || carry) {
        const sum = l1.val + l2.val + carry;
        const single = sum % 10;
        temp.next = new ListNode(single);
        temp = temp.next;
        carry = ~~(sum / 10);
        next();
    };
    return l3;

    function next() {
        // 如果遍历到头了，则给他赋值一个空节点，以方便计算（js自动隐式转化null为0）无需额外写判断。
        l1 = l1.next ? l1.next : emtpy;
        l2 = l2.next ? l2.next : emtpy;
    }
};
// @lc code=end