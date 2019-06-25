// 请判断一个链表是否为回文链表。

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
// 思路一:创建两个字符串,一个记录正向顺序链表相加的值,一个记录反向顺序链表相加的值.遍历直到节点超出链表.
// 此时正向顺序的值为=正向顺序的字符串+当前节点的值.   (12)→   正向:当前值"1"+"2" 反向:"2"+当前值"1"
// 此时反向顺序的值为=当前节点的值+反向顺序的字符串.	  
//最后判断两个两个字符串相等判断是否为回文链表
var isPalindrome = function(head) {
    var str="";
    var str_reverse="";
    while(head){
        str=str+head.val;
        str_reverse=head.val+str_reverse;
        head=head.next
    }
    return str===str_reverse
};