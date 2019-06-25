// 反转一个单链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 思路一：先判断链表是否为空，或者是否只有一个节点，如果是则不需要反转
// 定义一个过渡指针用来保存位置，定义一个prev指针保存节点的前一个节点，定义一个cur指针保存当前节点,让头节点指向null
// 当当前节点存在则一直遍历，temp保存当前节点指向的下一个节点.让当前节点的下一个节点指向prev,指针后移,让prev作为当前节点,cur就是当前节点的下一个节点即temp
// var reverseList = function(head) {
//     if(head===null|| head.next===null){
//         return head;
//     }        
//     var temp;
//     var cur=head.next;
//     var prev=head;
//     head.next=null;
//     while(cur !=null){
//         temp=cur.next;
//         cur.next=prev;
//         prev=cur;
//         cur=temp
//     }
//     return prev
// };
// 思路二：不断调用自身函数，函数返回的是原链表的尾节点，即新链表的头节点。新链表的尾节点指向null。
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  var new_head = reverseList(head.next);  // 反转后的头节点
  head.next.next = head;                  // 将反转后的链表的尾节点与当前节点相连
  head.next = null;
  return new_head;
  
};
