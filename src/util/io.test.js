import { it, expect } from 'vitest';
import writeData from './io';

it('should execute the writeFile method', () => {
  const testData = 'test';
  const fileName = 'text.txt';
  return expect(writeData(testData, fileName)).resolves.toBeUndefined();
});
