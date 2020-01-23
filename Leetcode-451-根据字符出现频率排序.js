var frequencySort = function(s) {
    const len = s.length
    // 字符串不存在则直接返回
    if (!len) {
        return s
    }
    // 字典记录字符
    const map = new Map()
    const temp = []
    let str = ''
    for (let i = 0; i < len; i++) {
        // 每一个字符
        const char = s[i]
        // 如果字典中不存在则保存该字符和一次次数
        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            // 存在则将次数值加1
            map.set(char, map.get(char) + 1)
        }
    }
    // 遍历将字典中的内容保存在临时数组中记录
    map.forEach((val, key) => {
        temp.push({ val, key })
    })
    // 再排序
    temp.sort((a, b) => b.val - a.val)
    // 根据值重复字母最后拼接起来
    temp.forEach(item => {
        str += item.key.repeat(item.val)
    })
    return str
};


// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了85.80%的用户
// 内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了93.84%的用户
