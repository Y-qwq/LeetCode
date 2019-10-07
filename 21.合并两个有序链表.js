/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
// @lc code=end