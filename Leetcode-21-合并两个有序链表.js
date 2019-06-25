// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
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
// 思路一：先创建新的链表作结果，cur为当前节点；假如l1的值小于l2的值，则把新链表的指针指向l1，然后l1指针后移；假如l2的值等于l1的值或者大于l1的值，则把新链表的指针指向l2，然后l2指针后移
// 每一次遍历后把当前节点cur后移直到超过l1和l2的链表长度,假如下一个节点指向l1不存在了，则当前指针直接指向l2，l2剩余部分即为新链表后的部分，假如下一节点指向l1存在，证明l2不存在了，直接返回l1剩余部分。最后返回到新链表
var mergeTwoLists = function(l1, l2) {
    var res=new ListNode(-1);
    var cur =res;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            cur.next = l1;
            l1 = l1.next
        }else{
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = (l1==null) ? l2 : l1
    return res.next
};