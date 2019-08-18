var $ = require('jquery');
export function create(anser) {
    // <thead><tr><th>＼</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>\
    var table = "<table id='table' class='table table-striped'>\
  <tbody>";
    anser.forEach(function (rows, rowCount) {
        table += "<tr>";
        // table += `<td>${rowCount + 1}行目</td>`
        rows.forEach(function (cols, colCount) {
            if (cols == 0) {
                table += `<td id="question"><input type="number" class="${rowCount}_${colCount}" min="1" max="9"></td>`;
            }
            else {
                table += `<td>${cols}</td>`;
            }
        });
        table += "</tr>";
    });
    table += "</tr></tbody></table>";
    $('#sudoku-table').html(table);
}
export function onChange(anser) {
    $('#question').on('change', function () {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var value = $(`.${i}_${j}`);
                if (value != undefined && value.val() != anser[i][j]) {
                    return false;
                }
            }
        }
        debugger;
        var text = 'クリア';
        $('#text').html(text);
    });
    return true;
}
