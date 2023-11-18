export function getSolvedGridValues(rows: number, cols: number): number[] {
    let solvedGridValues: number[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row === 0 || col === 0) {
                solvedGridValues.push(1);
            }
            else {
                let valueAbove = solvedGridValues[(row - 1) * cols + col];
                let valueToTheLeft = solvedGridValues[row * cols + col - 1]
                solvedGridValues.push(valueAbove + valueToTheLeft);
            }
        }
    } 
    return solvedGridValues;
}