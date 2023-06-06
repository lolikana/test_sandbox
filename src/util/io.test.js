import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';
import path from 'path';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it('should execute the writeFile method', () => {
  const testData = 'test';
  const fileName = 'text.txt';

  writeData(testData, fileName);
  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined() ;
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(fileName, testData);
});
