/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (51.82%)
 * Total Accepted:    41.4K
 * Total Submissions: 79.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!(l1 || l2)) {
        return null;
    }
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    let l1Next = l1;
    let l2Next = l2;
    let rs = null;
    let rsNext = null;

    if (l1Next.val > l2Next.val) {
        rs = new ListNode(l2Next.val);
        l2Next = l2Next.next;
    } else {
        rs = new ListNode(l1Next.val);
        l1Next = l1Next.next;
    }
    rsNext = rs;

    while (l1Next && l2Next) {
        if (l1Next.val > l2Next.val) {
            rsNext.next = new ListNode(l2Next.val);
            l2Next = l2Next.next;
            rsNext = rsNext.next;

        } else {
            rsNext.next = new ListNode(l1Next.val);
            l1Next = l1Next.next;
            rsNext = rsNext.next;
        }
    }

    if (l1Next) {
        rsNext.next = l1Next;
    }
    if (l2Next) {
        rsNext.next = l2Next;
    }
    return rs;
};


// var mergeTwoLists = function(l1, l2) {
//     if (l1 ===null && l2 === null) return null;
//     if (l1 === null) return l2;
//     if (l2 === null) return l1;
//     if (l1.val >= l2.val) {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     } else {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }
// };