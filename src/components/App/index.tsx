import React, {useState, useEffect} from 'react';
import './App.scss';
import NumberDisplay from '../NumberDisplay';
import {generateCells} from '../../utils';
import {Face, Cell} from '../../types';
import Button from '../Button';

const App : React.FC = () => {
    const [cells, setCells] = useState<Cell[][]>(generateCells());
    const [face, setFace] = useState<Face>(Face.smile);
    const [time, setTime] = useState<number>(0);
    const [live, isLive] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseDown = () => {
            setFace(Face.oh);
        };
        const handleMouseUp = () => {
          setFace(Face.smile);
        };
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
          window.removeEventListener("mousedown", handleMouseDown);
          window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
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
                        <span role="img" aria-label="face">{face}</span>
                    </div>
                <NumberDisplay value={time} />
            </div>
            <div className="Body">
                {renderCells()}
            </div>
        </div>
    )
}

export default App;