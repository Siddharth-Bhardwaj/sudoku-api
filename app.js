const express = require("express");
const path = require("path");
const sudokuSolver = require("sudoku-solver-js");

const app = express();
const port = process.env.PORT || 3000;

const solver = new sudokuSolver();

// var puzzle =
//     "001700509573024106800501002700295018009400305652800007465080071000159004908007053";
// console.log(solver.solve(puzzle));

app.get("/", (req, res) => {
    let p = req.query.puzzle;
    const solved = JSON.parse(solver.solve(p));
    res.send(solved);
});

app.listen(port, () => {
    console.log("Server running at port " + port);
});

// https://s-solver-api.herokuapp.com/
