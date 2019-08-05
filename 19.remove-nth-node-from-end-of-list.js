/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (31.67%)
 * Total Accepted:    28.1K
 * Total Submissions: 88.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
 * 
 */
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