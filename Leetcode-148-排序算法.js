// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
   var sortList = function(head) {
       if (!head || !head.next) return head

       let fast = head.next
       let slow = head

       while (fast && fast.next) {
           slow = slow.next
           fast = fast.next.next
       }

       const mid = slow.next
       slow.next = null

       let left = sortList(head)
       let right = sortList(mid)

       let h = new ListNode(0)
       let res = h
       while (left && right) {
           if (left.val < right.val) {
               h.next = left
               left = left.next
           } else {
               h.next = right
               right = right.next
           }

           h = h.next
       }

       h.next = left === null ? right : left
       return res.next
   };

   //    执行用时 :108 ms, 在所有 JavaScript 提交中击败了75.00%的用户
   // 内存消耗 :40.2 MB, 在所有 JavaScript 提交中击败了68.16%的用户
   //    class Node {
   //     constructor(value) {
   //      this.val = value
   //      this.next = undefined
   //     }
   //    }
   //    class NodeList {
   //     constructor(arr) {
   //      //声明链表的头部节点
   //      let head = new Node(arr.shift())
   //      // 默认时下一个节点是头部
   //      let next = head
   //      arr.forEach(item => {
   //       // 下一个节点是新实例化的节点
   //       next.next = new Node(item)
   //       next = next.next
   //      })
   //      // 构造器返回一个对象,这个类的实例就是这个对象
   //      return head
   //     }
   //    }
   // 
   //    let swap = (p, q) => {
   //     [p, q] = [q, p]
   //    }
   //    // 寻找基准元素的节点
   //    let partion = (begin, end) => {
   //     let val = begin.val
   //     let p = begin
   //     let q = begin.next
   //     while (q !== end) {
   //      if (q.val < val) {
   //       p = p.next
   //       swap(p, q)
   //      }
   //      q = q.next
   //     }
   //     // 最后一步,基准元素去到中间
   //     swap(p, begin)
   //     // 返回基准元素的节点
   //     return p
   //    }
   //    let sortList = (begin, end) => {
   //     if (begin !== end) {
   //      let part = partion(begin, end)
   //     }
   //   
