// 横列に同じ値がないか調べる.
export function rowValid(rowindex, anser) {
    // 自身以外の同行に0があるかどうか判別
    for (var i = 0; i < 9; i++) {
        if (anser[rowindex][i] == 0) {
            return false;
        }
    }
    return true;
}
// 縦列に0がないか調べる。
export function colValid(colindex, anser) {
    for (var i = 0; i < 9; i++) {
        if (anser[i][colindex] == 0) {
            return false;
        }
    }
    return true;
}
// 3×3マスないに0がないか調べる。
export function aroundValid(rowindex, colindex, anser) {
    // どの位置に属しているのか判別する
    var row = Math.floor(rowindex / 3) * 3;
    var col = Math.floor(colindex / 3) * 3;
    for (var i = row; i < row + 3; i++) {
        for (var j = col; j < col + 3; j++) {
            if (anser[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
