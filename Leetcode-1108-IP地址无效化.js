/** * @param {string} address * @return {string} */
// 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
// 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
var defangIPaddr = function(address) {
    let str = address.split("")
    for (let i = 0; i < str.length; i++) { if (str[i] == '.') { str[i] = "[.]" } }
    return str.join("")
};
// 执行用时 :88 ms, 在所有 JavaScript 提交中击败了6.01%的用户
// 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户




var defangIPaddr = function(address) {
    let x = address.split('.')
    return x.join('[.]');
};
// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了63.35%的用户
// 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户
