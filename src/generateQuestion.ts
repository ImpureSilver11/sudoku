import {rowValid, colValid, aroundValid} from './sudokuValidator'
export function init(anser: any){
  var question = anser
  console.log(question)
  var cutCount = 10
  while(cutCount > 0){
    var row = Math.floor(Math.random() * 9)
    var col = Math.floor(Math.random() * 9)
    // TODO:
    if(rowValid(row,col,question[row][col],question) == true
    //  &&
    //   colValid(row,col,question[row][col],question) == true &&
    //   aroundValid(row,col,question[row][col],question) == true)
    ){
      question[row][col] = 0
      cutCount--
    }
  }
  // 答えの一部を切り取る処理
  // ランダムな位置を取得
  // 切り取れるかどうか判別
  // 切り取れる場合は0か何かに置き換える。
  // これをランダム回数繰り返す
  return question
}