import { getSolvedGridValues } from './getSolvedGridValues';

describe('getSolvedGridValues', () => {
  it('should return [1] for rows = 1 and cols = 1', () => {
    const result = getSolvedGridValues(1, 1);
    expect(result).toEqual([1]);
  });

  it('should return [1, 1] for rows = 2 and cols = 1', () => {
    const result = getSolvedGridValues(2, 1);
    expect(result).toEqual([1, 1]);
  });

  it('should return [1, 1] for rows = 1 and cols = 2', () => {
    const result = getSolvedGridValues(1, 2);
    expect(result).toEqual([1, 1]);
  });

  it('should return [1, 1, 1, 2] for rows = 2 and cols = 2', () => {
    const result = getSolvedGridValues(2, 2);
    expect(result).toEqual([1, 1, 1, 2]);
  });

  it('should return [1, 1, 1, 2, 1, 3] for rows = 3 and cols = 2', () => {
    const result = getSolvedGridValues(3, 2);
    expect(result).toEqual([1, 1, 1, 2, 1, 3]);
  });

  it('should return [1, 1, 1, 1, 2, 3, 1, 3, 6] for rows = 3 and cols = 3', () => {
    const result = getSolvedGridValues(3, 3);
    expect(result).toEqual([1, 1, 1, 1, 2, 3, 1, 3, 6]);
  });
});
