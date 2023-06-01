import { describe, expect, test } from 'vitest';
import { pluck } from './pluck';

describe('pluck', () => {
  test('plucks all values in the object under the given property', () => {
    expect(
      pluck(
        [
          {
            city: 'Berlin',
            country: 'Germany',
          },
          {
            city: 'Paris',
            country: 'France',
          },
          {
            city: 'Rome',
            country: 'Italy',
          },
        ],
        'city'
      )
    ).toEqual(['Berlin', 'Paris', 'Rome']);
  });
  test('plucks number from the object', () => {
    expect(
      pluck(
        [
          {
            name: 'Bob',
            age: 22,
          },
          {
            name: 'Alice',
            age: 36,
          },
        ],
        'age'
      )
    ).toEqual([22, 36]);
  });
});
