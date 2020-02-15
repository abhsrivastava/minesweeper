import {Cell, CellValue, CellState} from '../types';

export const generateCells = (): Cell[][] => {
    const MAX_ROWS = 9;
    const MAX_COLS = 9;
    let cells : Cell[][] = [];
    for(let rows = 0; rows < MAX_ROWS; rows++) {
        cells.push([])
        for(let cols = 0; cols < MAX_COLS; cols++) {
            cells[rows].push({
                value: CellValue.none,
                state: CellState.unclicked
            });
        }
    }
    const MAX_MINES = 10;
    let numberOfMines = 0;
    while(numberOfMines < MAX_MINES) {
        const rowRand = Math.floor(Math.random() * MAX_ROWS);
        const colRand = Math.floor(Math.random() * MAX_COLS);
        const currentCell = cells[rowRand][colRand];
        if (currentCell.value !== CellValue.mine) {
            cells = cells.map((row, rowIndex) => row.map((cell, cellIndex) => {
                if (rowRand === rowIndex && colRand === cellIndex) {
                    console.log(`going to place mine at ${rowIndex} ${cellIndex}`)
                    return {
                        ...cell,
                        value : CellValue.mine
                    };
                } else return cell;
            }))
            numberOfMines=numberOfMines+1;
        }
    }

    cells = cells.map((row, rowIndex) => row.map((col, colIndex) => {
        let adjacentMines = 0;
        if (cells[rowIndex][colIndex].value !== CellValue.mine) {
            for(let j = -1; j < 2; j++) {
                for(let k = -1; k < 2; k++) {
                    if (j === 0 && k === 0) {
                        continue;
                    } else {
                        const curRow = rowIndex + j;
                        const curCol = colIndex + k;
                        if (curRow >= 0 && curRow < MAX_ROWS && curCol >= 0 && curCol < MAX_COLS) {
                            if (cells[curRow][curCol].value === CellValue.mine) {
                                adjacentMines = adjacentMines + 1;
                            }
                        }
                    }
                }    
            }
            return {
                ...col,
                value: adjacentMines
            }
        } else return cells[rowIndex][colIndex];
    }));
    for(let i = 0; i < MAX_ROWS; i++) {
        for(let j = 0; j < MAX_COLS; j++) {
            console.log(`cell value ${cells[i][j].value}`);
        }
    }
    return cells;
}