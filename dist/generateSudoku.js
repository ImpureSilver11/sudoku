var Anser = initArray();
export function createAnser() {
    for (var rowCount = 0; rowCount < 9; rowCount++) {
        if (rowCount == 0) {
            Anser[rowCount] = arrayShuffle();
        }
        else {
            for (var colCount = 0; colCount < 9; colCount++) {
                arrayShuffle().some(function (num) {
                    // 入れて大丈夫かどうかのチェック処理
                    if (numberValidity(rowCount, colCount, num) == true) {
                        Anser[rowCount][colCount] = num;
                        return true;
                    }
                });
                if (Anser[rowCount][colCount] == 0) {
                    // 処理を最初からやり直したい
                }
            }
            // fuga[rowCount] = arrayShuffle([1,2,3,4,5,6,7,8,9])
        }
    }
    console.log(Anser);
    return Anser;
}
// 数値割り当て
function numberValidity(row, col, value) {
    return (rowValidity(row, col, value) == true &&
        colValidity(row, col, value) == true &&
        aroundValidity(row, col, value) == true) ? true : false;
}
// 横列に同じ値がないか調べる.
function rowValidity(rowindex, colindex, value) {
    console.log(value);
    for (var i = 0; i <= colindex; i++) {
        if (Anser[rowindex][i] == value) {
            return false;
        }
        else if (colindex == i) {
            return true;
        }
    }
    return false;
}
// 縦列に同じ値がないか調べる。
function colValidity(rowindex, colindex, value) {
    for (var i = 0; i <= rowindex; i++) {
        if (Anser[i][colindex] == value) {
            return false;
        }
        else if (rowindex == i) {
            return true;
        }
    }
    return false;
}
// 3×3マスないに同じ値がないか調べる。
function aroundValidity(rowindex, colindex, value) {
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
