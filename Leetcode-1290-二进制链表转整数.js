// 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。

// 请你返回该链表所表示数字的 十进制值 。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
        if (!head) return 0;
        let str = '';
        let node = head
        while (true) {
            if (!node) return parseInt(str, 2);
            str += node.val;
            node = node.next;
        }
    }
    // 执行用时 :72 ms, 在所有 JavaScript 提交中击败了26.02%的用户
    // 内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
