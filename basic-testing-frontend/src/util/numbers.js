import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
  // if (isNaN(+value)) throw new Error('Not a numeric string or number');

  // could pass the test .toBeTypeOf("number")
  // return NaN

  return +value;
}

export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
