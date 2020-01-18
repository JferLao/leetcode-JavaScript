/*设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：
MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
*/
class MyCircularQueue {
	constructor(k) {
		this.k = k
		// 用来保存数据长度为k的数据结构
		this.list = new Array(k)
		// 队首指针
		this.front = -1
		// 队尾的指针
		this.rear = -1
		// 队列的长度
		this.size = 0
	}
	enQueue(num) {
		// 队列满了无法添加
		if (this.size == this.k) return false
		// 队列开始时
		if (this.front == this.rear && this.rear == -1) this.front++
		// 判断队尾指针
		this.rear = this.rear === this.k - 1 ? 0 : this.rear + 1,
			// 长度增加
			this.size++
		this.list[this.rear] = num
		return true
	}
	deQueue() {
		if (this.size == 0) return false
		delete this.list[this.front]
		this.front++
		this.size--
		if (this.size == 0) {
			this.front = -1
			this.rear = -1
		}
		if (this.front == this.k && this.size !== 0) {
			this.head = 0
		}
		return true
	}
	isEmpty() {
		return this.size === 0
	}
	isFull() {
		return this.size == this.k
	}
	Front() {
		return this.size == 0 ? -1 : this.list[this.front]
	}
	Rear() {
		return this.size == 0 ? -1 : this.list[this.rear]
	}
}
// 执行用时 :112 ms, 在所有 JavaScript 提交中击败了95.44%的用户
// 内存消耗 :42.2 MB, 在所有 JavaScript 提交中击败了17.08%的用户
