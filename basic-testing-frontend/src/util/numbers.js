export function transformToNumber(value) {
  if (isNaN(+value)) throw new Error('Not a numeric string or number');

  return +value;
}
