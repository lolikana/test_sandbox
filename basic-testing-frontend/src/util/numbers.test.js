import { describe, expect, it } from 'vitest';
import {
  cleanNumbers,
  transformToNumber,
} from '../../../basic-testing-frontend/src/util/numbers';

describe('transformToNumber', () => {
  it('should result a number', () => {
    const result1 = transformToNumber('1');
    expect(result1).toBeTypeOf('number');
  });

  it('should result a number', () => {
    const input = '1';
    const result1 = transformToNumber(input);
    expect(result1).toBe(+input);
  });

  // it('should throw an error if not numeric or numeric string value are passed', () => {
  //   const value = [1, 2];
  //   const resultFn1 = () => {
  //     transformToNumber(value);
  //   };
  //   expect(resultFn1).toThrow();
  // });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number is provided', () => {
    const numberValues = ['1', '2'];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw un error if an array with a least one empty string is provided', () => {
    const numberValues = ['', 2];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
