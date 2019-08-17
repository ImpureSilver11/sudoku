// 横列に同じ値がないか調べる.
export function rowValid(rowindex: number, colindex: number, value:number, anser:any):boolean{
  for(var i = 0; i <= colindex; i++){
    if(anser[rowindex][i] == value ){
      return false
    }
  }
  return true
}
// 縦列に同じ値がないか調べる。
export function colValid(rowindex: number, colindex: number, value:number, anser:any):boolean{
  for(var i = 0; i <= 9; i++){
    if(anser[i][colindex] == value && rowindex != i){
      return false
    }
  }
  return true
}
// 3×3マスないに同じ値がないか調べる。
export function aroundValid(rowindex: number, colindex: number, value:number, anser:any):boolean{
  // どの位置に属しているのか判別する
  var row = Math.floor(rowindex / 3) * 3
  var col = Math.floor(colindex / 3) * 3
  for(var i = row; i < row+3; i++){
    for(var j = col; j < col+3; j++){
      if(anser[i][j] == value && i != rowindex && j != colindex){
        return false
      }
    } 
  }
  return true
}