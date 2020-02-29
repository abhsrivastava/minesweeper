import React, {useState} from 'react';
import './App.scss';
import NumberDisplay from '../NumberDisplay';
import {generateCells} from '../../utils';
import {Face} from '../../types';
import Button from '../Button';

const App : React.FC = () => {
    const [cells, setCells] = useState(generateCells());
    const renderCells = () : React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, cellIndex) => 
            <Button 
                key={`${rowIndex}*${cellIndex}`} 
                value={cell.value} 
                state={cell.state} 
                row={rowIndex} 
                col={cellIndex} 
            />
        ))
    }    
    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0} />
                    <div className="Face">
                        <span role="img" aria-label="face">{Face.smile}</span>
                    </div>
                <NumberDisplay value={0} />
            </div>
            <div className="Body">
                {renderCells()}
            </div>
        </div>
    )
}

export default App;