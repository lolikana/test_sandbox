import { pick } from './pick';
import { describe, expect, test } from 'vitest';
/**
 * --- pick(obj, properties) ---
 * We want to create a function that filters objects down to a given list of properties
 */

describe('pick', () => {
  test('it only returns the requested properties', () => {
    const result = pick(
      {
        email: 'thomas@gmail.com',
        password: '123456',
        username: 'thomas',
      },
      ['username', 'email']
    );

    expect(result).toEqual({
      email: 'thomas@gmail.com',
      username: 'thomas',
    });
  });
  test('does not include requested properties that do not exist on the object', () => {
    const result = pick(
      {
        firstname: 'Peter',
        lastnname: 'Parker',
      },
      ['firstname', 'alterEgo']
    );

    expect(result).toEqual({
      firstname: 'Peter',
    });

    expect(result).not.toHaveProperty('alterEgo');
  });
  test('returns an empty object if an empty array of properties is passed', () => {
    const result = pick(
      {
        name: 'Stephen',
      },
      []
    );
    expect(result).toEqual({});
  });

  //** With Typescript we do not need the following test */
  // test('returns an empty object if no properties are requested', () => {
  //   const result = pick(
  //     {
  //       name: 'Stephen',
  //     },
  //     17
  //   );
  //   expect(result).toEqual({});
  // });
});
