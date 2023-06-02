export const pick = (
  obj: { [key: string]: string },
  properties: string[]
): { [key: string]: string } => {
  const result: { [key: string]: string } = {};

  properties.forEach(property => {
    if (obj.hasOwnProperty(property)) result[property] = obj[property];
  });

  return result;
};

pick(
  {
    firstname: 'Peter',
    lastnname: 'Parker',
  },
  ['firstname', 'alterEgo']
);
pick(
  {
    email: 'thomas@gmail.com',
    password: '123456',
    username: 'thomas',
  },
  ['username', 'email']
);
