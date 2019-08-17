"use strict";
var Sudoku = require('./generateSudoku');
var anser = new Sudoku.createAnser();
var question = new Sudoku.createQuestion(anser);
var table = require('./Table');
table.create(question);
