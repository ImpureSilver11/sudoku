var hoge = initArray();
export function createAnser() {
    for (var rowCount = 0; rowCount < 9; rowCount++) {
        if (rowCount == 0) {
            hoge[rowCount] = arrayShuffle();
        }
        else {
            for (var colCount = 0; colCount < 9; colCount++) {
                arrayShuffle().some(function (num) {
                    if (allotNumber(rowCount, colCount, num) == true) {
                        hoge[rowCount][colCount] = num;
                        return true;
                    }
                });
                // 入れて大丈夫かどうかのチェック処理
                if (hoge[rowCount][colCount] == 0) {
                    // 処理を最初からやり直したい
                }
            }
            // fuga[rowCount] = arrayShuffle([1,2,3,4,5,6,7,8,9])
        }
    }
    return hoge;
}
export function createQuestion(Anser) {
    var Question = Anser;
    // 答えの一部を切り取る処理
    // ランダムな位置を取得
    // 切り取れるかどうか判別
    // 切り取れる場合は0か何かに置き換える。
    // これをランダム回数繰り返す
    return Question;
}
// 0埋め配列の作成
function initArray() {
    var Anser = new Array(9);
    for (var i = 0; i < 9; i++) {
        var row = new Array(9);
        row = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        Anser[i] = row;
    }
    return Anser;
}
// 数値割り当て
function allotNumber(row, col, value) {
    // 縦列に同じ値がないか調べる。
    // 横列に同じ値がないか調べる.
    // 3×3マスないに同じ値がないか調べる。
    return true;
}
// 処理切り取り
// 縦列チェック処理
// 横列チェック処理
function rowValidity(rowindex, colindex) {
}
// 周囲マスチェック処理
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
