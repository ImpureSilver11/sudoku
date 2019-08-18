var $ = require('jquery');
export function create(anser) {
    // <thead><tr><th>＼</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>\
    var table = "<table id='table' class='table table-striped'>\
  <tbody>";
    anser.forEach(function (rows, rowCount) {
        table += "<tr>";
        rows.forEach(function (cols, colCount) {
            if (cols == 0) {
                table += `<td id="question"><input type="number" class="${rowCount}_${colCount}" min="1" max="9" value='0'></td>`;
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
    $(function () {
        // TODO:二つ目以降のquestionが発火しない
        $('#question').on('change', function () {
            var text = 'クリア';
            $('#text').html(text);
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var value = $(`.${i}_${j}`);
                    if (value.val() != undefined && value.val() != String(anser[i][j])) {
                        console.log(value.val());
                        $('#text').html('');
                    }
                }
            }
        });
    });
}
