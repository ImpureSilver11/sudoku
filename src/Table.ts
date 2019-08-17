var $ = require('jquery');
export function create(Anser: Array<Int32List>){
  // <thead><tr><th>＼</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>\
  var table = "<table id='table' class='table table-striped'>\
  <tbody>"
  Anser.forEach(function(rows: Int32List, rowCount: number){
    table += "<tr>"
    // table += `<td>${rowCount + 1}行目</td>`
    rows.forEach(function(cols: number){
      if(cols == 0){
        table += `<td><input type="number" id="question" min="1" max="9"></td>`
      }else{
        table += `<td>${cols}</td>`
      }
    })
    table += "</tr>"
  })
  table += "</tr></tbody></table>"
  $('#sudoku-table').html(table)
}