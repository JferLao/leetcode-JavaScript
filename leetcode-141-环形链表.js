// 给定一个链表，判断链表中是否有环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路:快慢指针同时从头节点出发，慢指针一次走一步，快指针一次走两步，如果快指针追上了慢指针，证明链表中有环；否则直到快指针走到链表尾都没有追上，则链表不包含环。
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast&&fast.next&&fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(fast==slow){
            return true;
        }
    }
    return false;
};

// 但是这题用js提交好像会有问题,因为测试用例有问题,我试了几次最后只能用Java交了
//下面是Java代码 思路和js一致
// public class Solution {
//     public boolean hasCycle(ListNode head) {
//     if(head == null) return false;
//     if(head.next == head) return true;
//     ListNode q = head;  //快指针
//     while(q != null){
//       if(q.next == null) return false;
//       head = head.next;   //慢指针
//       q = q.next.next;
//       if(head == q) return true;   //相遇即有环
//     }
//     return false;
//   }
// }