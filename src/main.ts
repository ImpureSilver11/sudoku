import './main.css'
var Sudoku = require('./generateSudoku')
var Question = require('./generateQuestion')
var anser = new Sudoku.init()
var question = new Question.createQuestion(anser)
var table = require('./table')
table.create(question)