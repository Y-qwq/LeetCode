/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head.next == null && n == 1) {
        return null;
    }
    let length = 0;
    let mapNums = [];
    let obj = new ListNode();

    for (let i = 0; i < 2; i++) {
        obj.next = new ListNode();
    }
    obj.next.next = head;

    let next = obj.next;

    do {
        length++;
        mapNums.push(next);
        next = next.next || null;
    }
    while (next)

    let title = length - n - 1;
    mapNums[title].next = mapNums[title].next.next;
    return obj.next.next;
};
// @lc code=end