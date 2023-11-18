import React, { useState } from 'react';
import Grid from '../Grid/Grid';
import './GridSolver.css';
import { getSolvedGridValues } from './util/getSolvedGridValues';

const GridSolver: React.FC = () => {
  const [rows, setRows] = useState<string>("");
  const [cols, setCols] = useState<string>("");

  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(event.target.value);
  };

  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCols(event.target.value);
  };    

  const solvedGridValues = getSolvedGridValues(parseInt(rows), parseInt(cols));

  return (
    <div>
      <label>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={handleRowsChange}
          placeholder="Enter number of rows"
        />
      </label>
      <label>
        Columns:
        <input
          type="number"
          value={cols}
          onChange={handleColsChange}
          placeholder="Enter number of columns"
        />
      </label>
      {
        rows && cols &&
        <>
          <p className="pathsText">Paths: { solvedGridValues[solvedGridValues.length - 1] }</p>
          <Grid
            rows={parseInt(rows)}
            cols={parseInt(cols)}
            values={solvedGridValues}
          />
        </>
      }
    </div>
  );
};

export default GridSolver;
