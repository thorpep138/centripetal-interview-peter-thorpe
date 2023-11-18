import React from 'react';
import Square from '../Square/Square';
import './Grid.css';

interface GridProps {
  rows: number;
  cols: number;
  values: (string | number)[];
}

const Grid: React.FC<GridProps> = ({ rows, cols, values }) => {
  if (values.length !== rows * cols) {
    console.error('Values array in grid does not match rows and cols.');
    return null;
  }

  const gridItems = values.map((value, index) => {
    const isLastSquare = index === values.length - 1;
    return isLastSquare ? 
        <Square key={index} value={value} backgroundColor='red' textColor='white' /> 
        : <Square key={index} value={value} />
  });

  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  return (
    <div className="grid-container">
      <div data-testid="squares-container" className="grid" style={gridStyle}>
        {gridItems}
      </div>
    </div>
  );
};

export default Grid;