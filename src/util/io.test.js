import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');

it('should execute the writeFile method', () => {
  const testData = 'test';
  const fileName = 'text.txt';

  writeData(testData, fileName);
  // return expect(writeData(testData, fileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});
