import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should result a number', () => {
  const result1 = transformToNumber('1');
  expect(result1).toBeTypeOf('number');
});

it('should throw an error if not numeric or numeric string value are passed', () => {
  const value = [1, 2];
  const resultFn1 = () => {
    transformToNumber(value);
  };
  expect(resultFn1).toThrow();
});
