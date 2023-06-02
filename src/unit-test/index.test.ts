import { caesarCipher, calculator, firstCharacCapitalized, reverseString } from '.';
import { expect, test } from 'vitest';

test('Sum 1 + 2 to equal 3', () => {
  expect(calculator(1, 2)).toEqual({
    add: 3,
    subtract: -1,
    divide: 0.5,
    multiply: 2,
  });
});
test('First character should be capitalized', () => {
  expect(firstCharacCapitalized('thomas')).toBe('Thomas');
  expect(firstCharacCapitalized('aleXIs')).toBe('Alexis');
});
test('String should be reverse', () => {
  expect(reverseString('thomas')).toBe('samoht');
  expect(reverseString('aleXIs')).toBe('sIXela');
});
test('Caesar cipher function', () => {
  expect(caesarCipher('thomas', 1)).toBe('uipnbt');
  expect(caesarCipher('aleXIs', 2)).toBe('cngZKu');
  expect(caesarCipher('Zoe & Me!', 1)).toBe('Apf & Nf!');
  expect(caesarCipher('zoe & Me!', 2)).toBe('bqg & Og!');
  expect(caesarCipher('it', 2.6)).toBe('Not an integer');
});
