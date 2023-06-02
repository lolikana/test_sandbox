import { describe, expect, test } from 'vitest';
import { last } from './last';

describe('last', () => {
  test('it returns the last element in an array', () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([true, false, 2, 3, 'hello'])).toBe('hello');
  });
});
