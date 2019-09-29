/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let map = new Map();
    let r = 0,
        c = 0;
    for (r = 0; r < 9; r++) {
        for (c = 0; c < 9; c++) {
            // . 跳过
            if (Number.isNaN(Number(board[r][c]))) break;
            if (map.has(board[r][c])) return false;
            map.set([board[r][c], 1]);
        }
        map.clear();
        c = 0;
    }
    for (c = 0; c < 9; c++) {
        for (r = 0; r < 9; r++) {
            // . 跳过
            if (Number.isNaN(Number(board[r][c]))) break;
            if (map.has(board[r][c])) return false;
            map.set([board[r][c], 1]);
        }
        map.clear();
        c = 0;
    }
    return true;
};