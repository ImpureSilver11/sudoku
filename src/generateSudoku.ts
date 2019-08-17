var hoge = initArray()

export function createAnser(){
  hoge.forEach(function(rows: Int32List, rowCount:number){
    rows.forEach(function(col:number, colCount:number){
      allotNumber(rowCount,colCount)
    })
  })
  return hoge
}

export function createQuestion(Anser: any){
  var Question = Anser
  // 答えの一部を切り取る処理
  // ランダムな位置を取得
  // 切り取れるかどうか判別
  // 切り取れる場合は0か何かに置き換える。
  // これをランダム回数繰り返す
  return Question
}

// 0埋め配列の作成
function initArray(){
  var Anser: any[] = new Array(9);
  for(var i = 0; i < 9; i++){
    var row = new Array(9)
    row = [0,0,0,0,0,0,0,0,0]
    Anser[i] = row
  }
  return Anser
}

// 数値割り当て
function allotNumber(row:number, col:number){
  if(hoge[row][col] == 0){
    // こちらもチェックする。
    hoge[row][col] =  Math.floor((Math.random()*8) +1)
    return
  }else{
    // 縦列に同じ値がないか調べる。
    // 横列に同じ値がないか調べる.
    // 3×3マスないに同じ値がないか調べる。
  }
}
// 処理切り取り
// 縦列チェック処理
// 横列チェック処理
function rowValidity(rowindex: number, colindex: number){
  
}
// 周囲マスチェック処理

// generate処理