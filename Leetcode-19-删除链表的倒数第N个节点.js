// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

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

// 思路: 先创建start节点,start节点指向head ,如果这个链表只有head一个节点则返回空,创建两个指针,快指针和慢指针.,
// 创建慢指针并让指针指向head开始移动,创建快指针从n开始移动,当快指针指的地方不为空，快指针和慢指针都移动,当快指针指向空代表指针超出链表的长度时，慢指针指向的位置就是要删除的节点
var removeNthFromEnd = function(head, n) {
    var start=new ListNode(null);        
    start.next=head;                      
    if(head.next==null){                 
        return null;
    }
    var slow=start;         
    slow.next=head;
    var fast=head;                       
    for(var i=0;i<n;i++){
        fast=fast.next;
    };
    while(fast!==null){                  
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next           
    return start.next;
};