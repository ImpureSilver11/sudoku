export function init() {
    var hoge = true;
    var value;
    var limit = 0;
    while (hoge) {
        value = createAnser();
        // これだと無限ループになる。
        hoge = check(value);
        if (hoge == true) {
            limit++;
        }
        if (limit == 100) {
            hoge = false;
        }
        console.log(value);
    }
    return value;
}
function check(value) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (value[i][j] == 0) {
                return true;
            }
        }
    }
    return false;
}
function createAnser() {
    var value = initArray();
    for (var rowCount = 0; rowCount < 9; rowCount++) {
        if (rowCount == 0) {
            value[rowCount] = arrayShuffle();
        }
        else {
            for (var colCount = 0; colCount < 9; colCount++) {
                value[rowCount][colCount] = numberValidity(rowCount, colCount, value);
                if (value[rowCount][colCount] == 0) {
                    return value;
                }
            }
        }
    }
    return value;
}
// 数値割り当て
function numberValidity(row, col, anser) {
    var value = 0;
    arrayShuffle().some(function (num) {
        if (rowValidity(row, col, num, anser) == true &&
            colValidity(row, col, num, anser) == true &&
            aroundValidity(row, col, num, anser) == true) {
            value = num;
            return;
        }
    });
    return value;
}
// 横列に同じ値がないか調べる.
function rowValidity(rowindex, colindex, value, anser) {
    // TODO:バリデーション甘め
    for (var i = 0; i <= colindex; i++) {
        if (anser[rowindex][i] == value) {
            return false;
        }
    }
    return true;
}
// 縦列に同じ値がないか調べる。
function colValidity(rowindex, colindex, value, anser) {
    // TODO:バリデーション甘め
    for (var i = 0; i <= rowindex; i++) {
        if (anser[i][colindex] == value) {
            return false;
        }
    }
    return true;
}
// 3×3マスないに同じ値がないか調べる。
function aroundValidity(rowindex, colindex, value, anser) {
    // どの位置に属しているのか判別する
    var row = Math.floor(rowindex / 3) * 3;
    var col = Math.floor(colindex / 3) * 3;
    for (var i = row; i < row + 3; i++) {
        for (var j = col; j < col + 3; j++) {
            if (anser[i][j] == value) {
                return false;
            }
        }
    }
    return true;
}
// generate処理
function arrayShuffle() {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var length = num.length;
    while (length) {
        var i = Math.floor(Math.random() * length);
        var str = num[--length];
        num[length] = num[i];
        num[i] = str;
    }
    return num;
}
// 0埋め配列の作成
function initArray() {
    var value = new Array(9);
    for (var i = 0; i < 9; i++) {
        var row = new Array(9);
        row = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        value[i] = row;
    }
    return value;
}
