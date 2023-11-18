import React from 'react';
import './Square.css';

interface SquareProps {
  value: string | number;
  backgroundColor?: string;
  textColor?: string;
}

const Square: React.FC<SquareProps> = ({ value, backgroundColor = 'white', textColor = 'black' }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {value}
    </div>
  );
};

export default Square;