import { expect, it } from 'vitest';

import { validateNotEmpty } from './validation';

it('should throw an error if empty string is provided as a value', () => {
  const testInput = '';
  const testErrorMessage = 'error';

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow();
});
it('should throw an error if empty string is provided as a value', () => {
  const testInput = '   ';
  const testErrorMessage = 'error';

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow();
});
