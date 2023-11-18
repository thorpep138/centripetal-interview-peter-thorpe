import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('It renders rows and cols labels and input boxes correctly when component mounts', () => {
  render(<App />);
  
  const rowsTextBox = screen.getByLabelText('Rows:');
  expect(rowsTextBox).toHaveAttribute('placeholder', 'Enter number of rows');

  const colsTextBox = screen.getByLabelText('Columns:');
  expect(colsTextBox).toHaveAttribute('placeholder', 'Enter number of columns');
});

test('It displays the correct grid for 3 rows and 3 columns and then updates appropriately'
    + 'when the user changes columns to 2 and displays that new grid correctly', () => {
    render(<App />);
    
    let rowsTextBox = screen.getByLabelText('Rows:');
    let colsTextBox = screen.getByLabelText('Columns:');

    act(() => {
        userEvent.type(rowsTextBox, '3');
        userEvent.type(colsTextBox, '3');

        let squaresContainer = screen.getByTestId('squares-container');
        let squares = Array.from(squaresContainer.querySelectorAll('.square'));

        let expectedSquareTextValues = ['1','1','1','1','2','3','1','3','6'];
        squares.forEach((square, index) => {
            const squareTextValue = square.textContent;
            expect(squareTextValue).toBe(expectedSquareTextValues[index]);
        });

        userEvent.type(colsTextBox, '{backspace}');
        userEvent.type(colsTextBox, '2');  

        squaresContainer = screen.getByTestId('squares-container');
        squares = Array.from(squaresContainer.querySelectorAll('.square'));
        expectedSquareTextValues = ['1','1','1','2','1','3'];
        squares.forEach((square, index) => {
            const squareTextValue = square.textContent;
            expect(squareTextValue).toBe(expectedSquareTextValues[index]);
        });
    });
});
