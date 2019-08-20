import {rowValid, colValid, aroundValid} from './sudokuValidator'
export function init(anser: any){
  // 値渡し
  var question = JSON.parse(JSON.stringify(anser))
  // TODO: 14越えると組み合わせが爆発する
  var cutCount = 13
  // var cutCount = 2
  while(cutCount > 0){
    var row = Math.floor(Math.random() * 9)
    var col = Math.floor(Math.random() * 9)
    if(rowValid(row,question) == true ||
    colValid(col,question) == true ||
    aroundValid(row,col,question) == true){
      question[row][col] = 0
      cutCount--
    }
  }
  return question
}