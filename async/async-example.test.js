import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2); // passed, but should not not
      done();
    } catch (err) {
      done(err);
    }
  });
});

it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
  // expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();

  // expect(generateTokenPromise(testUserEmail)).resolves.toBe(2); // failed
});
