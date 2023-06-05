import { describe, expect, it } from 'vitest';
import { generateResulstText } from './output';

describe('generalResultText()', () => {
  it('should return a string, no matter which value is passed in', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const result1 = generateResulstText(val1);
    const result2 = generateResulstText(val2);
    const result3 = generateResulstText(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;
    const resultText = generateResulstText(result);
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';
    const resulText = generateResulstText(result);
    expect(resulText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';
    const resultText = generateResulstText(result);
    expect(resultText).toContain('Invalid input. You must enter valid numbers.');
  });
});
