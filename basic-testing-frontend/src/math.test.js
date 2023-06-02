import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2];
  //Arc
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((preValue, curValue) => preValue + curValue, 0);
  expect(result).toBe(expectedResult);
});
