import {Cell, CellValue, CellState} from '../types';

export const generateCells = (): Cell[][] => {
    const MAX_ROWS = 9;
    const MAX_COLS = 9;
    const cells : Cell[][] = [];
    for(let rows = 0; rows < MAX_ROWS; rows++) {
        cells.push([])
        for(let cols = 0; cols < MAX_COLS; cols++) {
            cells[rows].push({
                value: CellValue.none,
                state: CellState.open
            });
        }
    }
    return cells;
}