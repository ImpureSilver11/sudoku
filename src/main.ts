import './main.css'
var Sudoku = require('./generateSudoku')
var Question = require('./generateQuestion')
var anser = new Sudoku.init()
var question = new Question.init(anser)
var table = require('./table')
console.log(anser)
table.create(question)
table.onChange(anser)