import { alphabetShift } from '@/libs/helpers';

export function calculator(x: number, y: number): {} {
  return {
    add: x + y,
    subtract: x - y,
    divide: x / y,
    multiply: x * y,
  };
}

export const firstCharacCapitalized = (str: string): string => {
  const split = str.split('');
  return split[0].toUpperCase() + split.slice(1, split.length).join('').toLowerCase();
};

export const reverseString = (str: string): string => {
  if (str === '') return '';
  return reverseString(str.substring(1)) + str.charAt(0);
};

export const caesarCipher = (str: string, shift: number): string => {
  if (shift % 1 != 0) return 'Not an integer';

  const split = str.split('');

  return alphabetShift(split, shift).join('');
};
