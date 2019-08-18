
export function init(){
  var value = initArray()
  // 9!通り
  var i = arrayShuffle()
  // TODO:あとでリファクタ
  value[0] = i
  value[1] = [i[3],i[4],i[5],i[6],i[7],i[8],i[0],i[1],i[2]]
  value[2] = [i[6],i[7],i[8],i[0],i[1],i[2],i[3],i[4],i[5]]
  value[3] = [i[2],i[0],i[1],i[5],i[3],i[4],i[8],i[6],i[7]]
  value[4] = [i[5],i[3],i[4],i[8],i[6],i[7],i[2],i[0],i[1]]
  value[5] = [i[8],i[6],i[7],i[2],i[0],i[1],i[5],i[3],i[4]]
  value[6] = [i[1],i[2],i[0],i[4],i[5],i[3],i[7],i[8],i[6]]
  value[7] = [i[4],i[5],i[3],i[7],i[8],i[6],i[1],i[2],i[0]]
  value[8] = [i[7],i[8],i[6],i[1],i[2],i[0],i[4],i[5],i[3]]
  return value
}

function arrayShuffle(){
  var num = [1,2,3,4,5,6,7,8,9]
  var length = num.length
  while (length) {
    var i = Math.floor(Math.random() * length);
    var str = num[--length];
    num[length] = num[i];
    num[i] = str;
  }
  return num
}

// 0埋め配列の作成
function initArray():any[]{
  var value: any[] = new Array(9)
  for(var i = 0; i < 9; i++){
    var row = new Array(9)
    row = [0,0,0,0,0,0,0,0,0]
    value[i] = row
  }
  return value
}