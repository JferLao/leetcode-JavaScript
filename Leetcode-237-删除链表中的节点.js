// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

// 现有一个链表 -- head = [4,5,1,9]，它可以表示为:

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//思路：就是链表中用下一个节点替代该节点而已
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next
};