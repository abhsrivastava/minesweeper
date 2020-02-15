import React from 'react';
import './Button.scss';
import {CellValue, CellState} from '../../types';

interface ButtonProps {
    value: CellValue;
    state: CellState;
    row: number;
    col: number;
} 

const Button : React.FC<ButtonProps> = ({value, state, row, col}) => {
    const renderContent = () : React.ReactNode => {
        if (state === CellState.clicked) {
            if (value === CellValue.mine) {
                return (
                    <span role="img" aria-label="mine">💣</span>
                );
            }
            if (value === CellValue.none) {
                return null;
            } else {
            return <div>{value}</div>
            }
        } else if (state === CellState.flagged) {
            return (
                <span role="img" aria-label="flagged">🚩</span>
            );
        } else {
            return null;
        }
    }
    return (
        <div className={`Button ${state === CellState.clicked? "clicked":""} value-${value}`} >
            {renderContent()}
        </div>
    );
}
export default Button;