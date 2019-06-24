// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
// 
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 数独部分空格内已填入了数字，空白格用 '.' 表示。
/**
 * @param {character[][]} board
 * @return {boolean}
 */
//思路:一个数独是否有效，必须满足题目中的三个条件，那么依次判断是否满足这三个条件即可。
// 我的大方向是，把每一行（每一列、或每一块）的所有数字都加入一个临时数组，然后转换成set集合，判断这个数组长度与集合大小是否相等，
// 若相等，说明无重复数字，若不等，说明有重复数字，就返回false。
// 所有条件都满足，最后才返回true
var isValidSudoku = function(board) {
//   检查每一行
  for (let arr of board) {            
    let row = []
    for (let c of arr) {
      if (c !== '.') row.push(c);
    }
    let set = new Set(row)
    if (set.size !== row.length) return false;
  }
  
//   检查每一列
  for (let i = 0; i < 9; i++) {
    let col = []
    board.map( arr => {
      if (arr[i] !== '.') col.push(arr[i])
    })
    let set = new Set(col)
    if (set.size !== col.length) return false;
  }
  
//   检查每个小方块
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      let box = []
      for (let a = x; a < 3 + x; a ++) {
        for (let b = y; b < 3 + y; b ++) {
          if (board[a][b] !== '.') box.push(board[a][b])
        }
      }
      let set = new Set(box)
      if (set.size !== box.length) return false
    }
  }
  
  return true
};