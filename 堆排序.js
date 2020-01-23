class Heap {
    constructor(data) {
        this.data = data
    }
    sort() {
        let iArr = this.data
        let n = iArr.length
        if (n <= 1) {
            return iArr
        } else {
            // 从最后一个父节点开始
            for (let i = Math.floor(n / 2); i >= 0; i--) {
                // 实现了一次最大堆排序获取到最大值的父节点
                Heap.maxHeapify(iArr, i, n)
            }
            // 进行n次.每一次最大值先和最后一个子节点交换然后把最大值排除出去再获取最大堆
            for (let j = 0; j < n; j++) {
                Heap.swap(iArr, 0, n - 1 - j)
                    // 每交换一次有效长度会少j
                Heap.maxHeapify(iArr, 0, n - 1 - j)
            }
            return iArr
        }
    }
    static swap(arr, a, b) {
            if (a === b) {
                return ''
            }
            [arr[a], arr[b]] = [arr[b], arr[a]]
        }
        // 要操作的数组,索引值,有效的数组长度
        // 构建最大堆
    static maxHeapify(Arr, i, size) {
        //左节点(索引)
        let l = i * 2 + 1
            //右节点(索引)
        let r = i * 2 + 2
            // 标记最大节点,默认指向父节点
        let largest = i
            // 每一次构建最大堆要把最大值拉出去,用size设置有效长度
            //父节点i和节点l,r比较取最大值
        if (i <= size && Arr[l] > Arr[largest]) {
            largest = l
        }
        if (r <= size && Arr[r] > Arr[largest]) {
            largest = r
        }
        // largest不等于父节点则交换
        if (largest !== i) {
            Heap.swap(Arr, i, largest)
                // 有可能影响到子树
                // 以lagrgest为父节点进行递归
            Heap.maxHeapify(Arr, largest, size)
        }
    }
}
