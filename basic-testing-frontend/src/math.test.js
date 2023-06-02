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

it('should yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = [1, 2, 'test'];
  //Arc
  const result = add(inputs);
  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1', '2', '3'];
  //Arc
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((preValue, curValue) => +preValue + +curValue, 0);
  expect(result).toBe(expectedResult);
});
